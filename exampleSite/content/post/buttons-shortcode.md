+++
authors = [
    "iara"
]
title = "Button shortcode"
date = "2020-06-01"
description = "Built in theme shortcodes"
summary = "Learn how to use built in button shortcode in this theme"
tags = [
    "customization",
    "shortcodes",
]
categories = [
    "themes",
]
+++

This theme has built in [shortcodes](https://gohugo.io/content-management/shortcodes/).

Shortcodes are simple snippets inside your content files calling built-in or custom templates.

Buttons are `<a>` tags styled as a button.

## Usage

```html
{{</* button text="I'm a **button**" color="success" location="center" url="#" target="_blank" */>}}
```
{{< button text="I'm a **button**" color="success" location="center" url="#" target="_blank" >}}

## Colors

Buttons have many colors.

{{< button text="Color **success**" color="success" location="left" url="#" >}}

{{< button text="Color **danger**" color="danger" location="left" url="#" >}}

{{< button text="Color **warning**" color="warning" location="left" url="#" >}}

{{< button text="Color **info**" color="info" location="left" url="#" >}}

{{< button text="Color **light**" color="light" location="left" url="#" >}}

{{< button text="Color **dark**" color="dark" location="left" url="#" >}}

## Location

Buttons can also be placed in different locations.

```html
{{</* button text="Location **center**" location="center" url="#" */>}}
```

{{< button text="Location **left**" location="left" url="#" >}}

{{< button text="Location **center**" location="center" url="#" >}}

{{< button text="Location **right**" location="right" url="#" >}}

## Side by side

You can also place many buttons in a row, but only if you don't set `location`.

If you want to center a group of buttons just place the shortcode inside a `<p>` tag and set the class to `text-center`.
You can also use classes `text-left` and `text-right` as well.

```html
<p class="text-center">
{{</* button text="Button" color="success" url="#" norow=true */>}}
{{</* button text="Button" color="danger" url="#" norow=true */>}}
{{</* button text="Button" color="warning" url="#" norow=true */>}}
</p>
```

<p class="text-center">
{{< button text="Button" color="success" url="#" norow=true >}}

{{< button text="Button" color="danger" url="#" norow=true >}}

{{< button text="Button" color="warning" url="#" norow=true >}}
</p>
