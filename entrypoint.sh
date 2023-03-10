#!/bin/sh
rm -f ./tmp/pids/server.pid
bundle install
yarn install 
rails db:migrate
rails db:seed

if [ $RAILS_ENV = "production" ]; then
  export RAILS_SERVE_STATIC_FILES=true
  bundle exec rake assets:precompile
  bundle exec rails webpacker:compile
fi
bundle exec rails server -b 0.0.0.0
