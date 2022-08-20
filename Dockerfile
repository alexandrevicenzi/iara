FROM alpine:latest

RUN apk add hugo

RUN mkdir /blog
RUN mkdir -p /themes/iara

USER 1000:1000
