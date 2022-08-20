+++
authors = [
    "iara"
]
date = "2020-09-02"
title = "Date format"
tagline = "Terça-feira, 1 de setembro de 2020"
description = "Format your dates"
tags = [
    "customization",
    "dates",
]
categories = [
    "themes",
]
+++

It's possible to change the date format used in this theme, all you need to do is set it in paramenters.
<!--more-->

In you `config.yaml` or `config.toml` set:

```yaml
params:
  dateFormat: "02/01/2006"
```

Default format is `"Jan 2, 2006"`.

Translation of month names is not supported in Hugo at this moment. Using default format will produce English names, even if you have set your Blog language to something else.

Read more about date format [here](https://gohugo.io/functions/dateformat/).

