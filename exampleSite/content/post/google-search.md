+++
authors = [
    "iara"
]
date = "2020-09-05"
title = "Google Custom Search"
description = "Enable search on your Blog"
tags = [
    "customization",
    "search",
]
categories = [
    "themes",
]
+++

It's possible to use [Google Search](https://cse.google.com/cse/all) in this theme, all you need to do is set it in paramenters.
<!--more-->

In you `config.yaml` or `config.toml` set:

```yaml
params:
  search:
    enabled: true
    provider: google
    google:
      id: <YOUR-KEY>
```

Currently, only Google Search is supported.

The best layout in Google Custom Search is Results Only and the best Theme is Minimalist.
