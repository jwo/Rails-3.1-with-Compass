Rails 3.1 with Compass
======================

Rails 3.1 with Compass was difficult to get working in 3.1.0.rc4, so here's a bootstrapp to get you started!

The secret lies with:

    gem 'compass', :git => 'https://github.com/chriseppstein/compass.git', :branch => 'rails31'

Commands to get started
-----------------------

1. Clone the repo
2. rvm use 1.9.2
3. rvm gemset create rails31
4. gem install bundler
5. bundler install

In case you don't want to use this bootstrap, but want to create a rails 3.1 app of your own to play with (and keep the gems in a tightly locked gemset)

1. Have RVM
2. rvm use 1.9.2
3. rvm gemset create rails31
4. rvm use gemset rails31
5. gem install bundler
6. gem install rails --pre #3.1.0.rc4


Contact
-------

Jesse Wolgamott  
Twitter: @jwo


License
-------

That which Rails uses. go forth and do not sue.
