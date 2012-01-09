Rails 3.1 with Compass
======================

Rails 3.1 with Compass was difficult to get working in 3.1, so here's a bootstrapp to get you started!

The secret lies with:

    gem 'compass', "0.12.alpha.0"

After this, you won't need the compass.rb initializer, and you can include compass in your /app/assrts/stylesheets like:

```
@import "compass/css3";
@import "compass/reset";
@import "blueprint/grid"
```

You do need to edit the config/application.rb and do the following:

1. Add `require "sass-rails"` under the require rails/all
2. Add the following so compass can find the stylesheets

```
config.sass.load_paths ||= []
config.sass.load_paths << "#{Rails.root}/app/assets/stylesheets"
config.sass.load_paths << "#{Gem.loaded_specs['compass'].full_gem_path}/frameworks/compass/stylesheets"
config.sass.load_paths << "#{Gem.loaded_specs['compass'].full_gem_path}/frameworks/blueprint/stylesheets"
```

Check out the application.rb for full syntax. Obviously don't include Blueprint if you're not using it.

How to get working on Heroku?
-----------------------------

This secret is either being on the heroku cedar stack (node), or:

		group :production do
			gem 'therubyracer-heroku'
		end

Commands to get started
-----------------------

1. Clone the repo
2. rvm use 1.9.2
3. rvm gemset create rails31
4. gem install bundler
5. bundler install

Contact
-------

Jesse Wolgamott  
Twitter: @jwo


License
-------

That which Rails uses. go forth and do not sue.
