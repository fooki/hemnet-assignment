# README

Search for Donald trump quotes!

## System Dependencies

* Ruby 2.5.1
* Bundler 2.0.1
* Sqlite3 with dev libs (active record isnt used though)
* NodeJS 8.x
* Yarn

## Starting the webserver

To run the app on port 3000 locally, use either docker or run it standalone:

#### Starting with docker

```console
docker build -t tronald:latest .
docker run -d -p 3000:3000 tronald:latest
```

#### Starting with rails

```console
bundle install
yarn install
RAILS_ENV=production bundle exec rake webpacker:compile
RAILS_ENV=production bundle exec rails s -b 0.0.0.0 -p 3000
```

## Testing

chrome and chromedriver is needed when running the feature tests.

```console
bundle exec rspec
bundle exec rubocop

yarn run test
yarn run lintfix
```

## TODO

- Pagination.
- Some minor external api url hardcoding in the backend.
- React container testing.
