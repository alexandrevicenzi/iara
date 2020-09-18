+++
authors = [
    "iara",
]
title = "Cover image example"
date = "2020-09-10"
description = "Cover or Hero are used to display an image that fills the entire screen"
tags = [
    "customization",
    "images",
]
categories = [
    "themes",
]
[[resources]]
  src = "cover.jpg"
  title = "Cover Image"
  [resources.params]
    caption = "Photo by Ricardo Rocha on [Unsplash](https://unsplash.com/t/wallpapers)"
+++

Covers are displayed before article title in full page width. Use a large image, 1200px width at least.
<!--more-->

## Using Page Bundles

Covers can be set with [Page Bundles](https://gohugo.io/content-management/page-bundles/).

Set the following items to get the full experience.

```toml
[[resources]]
  src = "cover.jpg"
  title = "Alternative Text"
  [resources.params]
    caption = "Photo by Ricardo Rocha on [Unsplash](https://unsplash.com/t/wallpapers)"
```

## Using Front Matter

Covers can also be set using [Front Matter](https://gohugo.io/content-management/front-matter/).

```toml
[cover]
image = "/images/cover.jpg"
alt = "Alternative Text"
caption = "Image *Caption*"
```
