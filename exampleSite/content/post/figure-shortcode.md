+++
authors = [
    "iara"
]
title = "Figure shortcode"
date = "2020-06-01"
description = "Built-in theme shortcodes"
summary = "Learn how to use built in figure shortcode"
tags = [
    "customization",
    "shortcodes",
]
categories = [
    "themes",
]
+++

You can use [Shortcodes](https://gohugo.io/content-management/shortcodes/) to display images in any part of your article.

<!--more-->

Here is a example on how to use it:

```html
{{</* figure src="/images/cover.jpg" width="100%" title="Cover" caption="Photo by Ricardo Rocha on [Unsplash](https://unsplash.com/t/wallpapers)" */>}}
```

And here is the result:

{{< figure src="/images/cover.jpg" width="100%" title="Cover" caption="Photo by Ricardo Rocha on [Unsplash](https://unsplash.com/t/wallpapers)" >}}

And here is another example:

{{< figure src="/images/thumbnail.png" width="200px" caption="Built with Hugo" >}}
