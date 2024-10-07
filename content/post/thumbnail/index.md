+++
authors = [
    "iara",
]
title = "Thumbnail image example"
date = "2020-08-10"
description = "Thumbnails are used in the Home page"
tags = [
    "customization",
    "images",
]
categories = [
    "themes",
]
[[resources]]
  src = "thumbnail.png"
  title = "Thumbnail Image"
  [resources.params]
    caption = "Hugo Logo"
+++

Thumbnails are used in the Home page.
<!--more-->

## Using Page Bundles

Thumbnails can be set with [Page Bundles](https://gohugo.io/content-management/page-bundles/).

Set the following items to get the full experience.

```toml
[[resources]]
  src = "thumbnail.png"
  title = "Alternative Text"
  [resources.params]
    caption = "Hugo Logo"
```

## Using Front Matter

Thumbnails can also be set using [Front Matter](https://gohugo.io/content-management/front-matter/).

```toml
[cover]
image = "/images/thumbnail.png"
alt = "Alternative Text"
caption = "Image *Caption*"
```
