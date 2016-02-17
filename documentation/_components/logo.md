---
layout: component
type: component
title: Logo
---

<div class="force-clear">
  <h2 class="header-title">
    <a href="/" class="logo" title="Home">
      <svg class="logo">
        <use xlink:href="{{ '/assets/img/cloudgov-sprite.svg#logo' |
           prepend: site.baseurl }}"/>
      </svg>
    </a>
  </h2>
</div>

<pre>
  <code>
    &lt;h2 class="header-title">
      &lt;a href="/" class="logo" title="Home">
        &lt;svg class="logo">
          &lt;use xlink:href="/assets/img/cloudgov-sprite.svg#logo" />
        &lt;/svg>
      &lt;/a>
    &lt;/h2>
  </code>
</pre>
