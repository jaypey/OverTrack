FROM ruby:2.6.6-alpine

WORKDIR /overtrack

COPY . .

RUN apk add --no-cache build-base postgresql-dev yarn && \
    yarn install --non-interactive --check-files && \
    gem install bundler && \
    bundle install && \
    bundle update

EXPOSE 3000

ENTRYPOINT [ "/overtrack/entrypoint.sh" ] 
