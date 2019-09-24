FROM ruby:2.5.1
ENV BUNDLER_VERSION 2.0.1

# Node and sqlite (which isnt even used)
RUN apt-get update -qq && apt-get install -y sqlite3 and libsqlite3-dev

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn



RUN gem install bundler
RUN gem update --system

RUN bundler --version
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
RUN yarn install

EXPOSE 3000
RUN RAILS_ENV=production bundle exec rake webpacker:compile
CMD RAILS_ENV=production bundle exec rails s
