
var GitHub = require('github-api');

const gh = new GitHub();
const repo = gh.getRepo('18f', 'cg-style');

const currentTag = process.argv[2];

function panic(msg, err) {
  console.error('! error: ' + msg, err);
  process.exit(1);
}

function fetchTags() {
  console.log('fetching tags');
  return repo.listTags()
    .then(function(tags) {
      return tags.data;
    })
    .catch(function(err) {
      panic('Could not fetch tags', err);
    });
}

function fetchAllPrs() {
  console.log('fetching prs');
  return repo.listPullRequests({ state: 'all' })
    .then(function(prs) {
      return prs.data;
    })
    .catch(function(err) {
      panic('Could not fetch all prs', err);
    });
}

function fetchCompareCommits(lastTag, currentTag) {
  console.log('fetching commits');
  return repo.compareBranches(lastTag, currentTag)
    .then(function(commits) {
      return commits.data.commits;
    })
    .catch(function(err) {
      panic('Could not fetch compared commits', err);
    });
}

function filterLastTwoTags(tags) {
  return {
    currentTag: tags[0],
    lastTag: tags[1]
  }
}

function filterPrs(prs, commits) {
  var filteredPrs = prs.filter(function(pr) {
    for (var i = 0; i < commits.length; i++) {
      var commit = commits[i];
      return commitBelongsToPr(pr, commit);
    }
  });
  return uniqPrs(filteredPrs);
}

function commitBelongsToPr(pr, commit) {
  return commit.sha === pr.head.sha;
}

function uniqPrs(a) {
  var seen = {};
  return a.filter(function(item) {
    var k = item.id;
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  })
}

function buildPrsMessage(prs) {
  var message = '';
  prs.forEach(function(pr) {
    message += '- ';
    message += pr.title + ' ';
    message += '['+ pr.number + '](' + pr.html_url + ')';
    message += "\n";
  });
  return message;
}

function main() {
  fetchTags().then(function(tags) {
    return filterLastTwoTags(tags);
  }).then(function(tags) {
    console.log('filtering messages between ' + tags.lastTag.name + ' and ' +
        tags.currentTag.name);

    fetchCompareCommits(tags.lastTag.name, tags.currentTag.name).then(
        function(commits) {
      console.log('finding prs between commits ' + commits[0].sha + ' and ' +
        commits[commits.length - 1].sha);
      return fetchAllPrs().then(function(prs) {
        console.log('filtering prs between commits');
        return filterPrs(prs, commits);
      });
    }).then(function(filteredPrs) {
      console.log('filtered ' + filteredPrs.length + ' prs starting at '+
        filteredPrs[0].number);
      var message = buildPrsMessage(filteredPrs);
      console.log('created the following message: \n');
      console.log('==========================================================\n');
      console.log(message);
      console.log('==========================================================');
    }).catch(function(err) {
      panic('merging of prs and commits failed', err);
    });
  });
}

main();
