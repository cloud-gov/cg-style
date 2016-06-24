source 'https://rubygems.org'

gem 'jekyll'
gem 'html-proofer'
gem 'about_yml'
gem 'redcarpet'
gem 'sass'

group :jekyll_plugins do
  if ENV['USE_LOCAL_GEM']
    gem 'cloudgov-style', path: './gem'
  else
    gem 'cloudgov-style'
  end
end
