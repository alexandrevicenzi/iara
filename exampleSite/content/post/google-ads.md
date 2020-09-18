+++
authors = [
    "iara"
]
date = "2020-09-01"
title = "Google Ads"
description = "Enable ads on your Blog"
tags = [
    "customization",
    "ads",
]
categories = [
    "themes",
]
images = [
    "/images/adsense.png",
]
+++

It's possible to use [Google Ads](https://www.google.com/adsense/start/) in this theme, all you need to do is set it in paramenters.
<!--more-->

In you `config.yaml` or `config.toml` set:

```yaml
params:
  ads:
    google:
      id: <YOUR-KEY>
```

Currently, only Google Ads is supported.

You can use Auto Ads by Google or you can hook the theme to add ads in places that you want.

Currently you can create a partial called `custom/sidebar.html` to add extra items in Home Sidebar, but you can also create a custom layout for your pages to override `single.html`.
