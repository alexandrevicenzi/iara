+++
authors = [
    "iara"
]
date = "2020-09-01"
title = "AddThis: Engage with your audience"
description = "Enable AddThis on your Blog"
tags = [
    "customization",
    "social",
]
categories = [
    "themes",
]
images = [
    "/images/addthis.png",
]
+++

It's possible to use [AddThis](https://www.addthis.com/) in this theme, all you need to do is set it in paramenters.
<!--more-->

{{<figure src="/images/addthis.png">}}

AddThis can be used to engage with your audience in many ways:

- Share Buttons
- Follow Buttons
- Newsletter
- Promotions
- Related Posts

In you `config.yaml` or `config.toml` set:

```yaml
params:
  addthis:
    pubid: <YOUR-KEY>
```

Some items require placements of custom code in theme, no custom code is available by default, you need to override the theme for some features of AddThis.

If the feature only requires JavaScript it will work, for example, follow and share buttons work propertly because they float on your screan.
