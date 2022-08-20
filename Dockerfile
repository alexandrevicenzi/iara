FROM alpine:latest

RUN apk add hugo

RUN mkdir /blog

USER 1000:1000
