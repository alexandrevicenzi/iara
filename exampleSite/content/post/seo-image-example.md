+++
authors = [
    "iara",
]
title = "SEO image example"
date = "2020-08-01"
description = "Using images for SEO"
tags = [
    "customization",
    "images",
]
categories = [
    "themes",
]
images = [
  "/images/thumbnail.png"
]
+++

You can also define images for SEO, some social networks require square images.
<!--more-->

{{< figure src="/images/thumbnail.png" width="200px" caption="Built with Hugo" >}}

## Usage

You can set SEO images be set using [Front Matter](https://gohugo.io/content-management/front-matter/).

```toml
images = [
  "/images/thumbnail.png"
]
```

You can set as many as you want, but 6 is the current limit, everything else will be ignored.

Also, if no cover or thumbnail is set in Front Matter, the first image in the image list for SEO will be used for Home Thumbnail.
