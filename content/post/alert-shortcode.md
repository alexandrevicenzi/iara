+++
authors = [
    "iara"
]
date = "2020-06-01"
title = "Alert shortcode"
tagline = "Learn to use alerts!"
description = "Built-in theme shortcodes"
summary = "Learn how to use built in alert shortcode in this theme"
tags = [
    "customization",
    "shortcodes",
]
categories = [
    "themes",
]
+++

This theme has built in [shortcodes](https://gohugo.io/content-management/shortcodes/). Shortcodes are simple snippets inside your content files calling built-in or custom templates.

## Alerts

A nice way to highlight a piece of information in your articles.

### Colors

Alerts have many colors.

{{< alert text="Color **success**" color="success" >}}

{{< alert text="Color **danger**" color="danger" >}}

{{< alert text="Color **warning**" color="warning" >}}

{{< alert text="Color **info**" color="info" >}}

{{< alert text="Color **light**" color="light" >}}

{{< alert text="Color **dark**" color="dark" >}}

### Usage

```html
{{</* alert text="A simple alert." */>}}
```

{{< alert text="A simple alert." >}}

If no color is specified, **info** is used by default, or you can set the color you want.

```html
{{</* alert text="A simple alert." color="dark" */>}}
```

{{< alert text="A simple alert." color="dark" >}}

### Markdown

You can use markdown inside your alert as well.

```html
{{</* alert text="An **alert** with a [link](#)." color="warning" */>}}
```

{{< alert text="An **alert** with a [link](#)." color="warning" >}}

### Additional content

Alerts can also have header and footer to catch user attention even more.

```html
{{</* alert text="Aww yeah, you successfully read this this alert message." header="Well done!" footer="Congratulations." color="success" */>}}
```

{{< alert text="Aww yeah, you successfully read this this alert message." header="Well done!" footer="Congratulations." color="success" >}}
