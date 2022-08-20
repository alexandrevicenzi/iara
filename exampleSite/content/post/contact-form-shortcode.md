+++
authors = [
    "iara"
]
title = "Contact form shortcode"
date = "2020-06-01"
description = "Built in theme shortcodes"
summary = "Learn how to use built in contact form shortcode in this theme"
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

You can use a service like [FormSpark](https://formspark.io/) with this shortcode.

## Usage

```html
{{</* contact action="https://submit-form.com/12345" method="POST" recaptcha="XYZ1234" */>}}
```

You must set `action`, `method` and `recaptcha` are optional.

Google Recaptcha will only work if the form service provides integration, [FormSpark](https://formspark.io/) has this feature.

Using Google Recaptcha is a good way to avoid spam and bots.

## Contact Form

{{< contact action="https://submit-form.com/12345" method="POST" recaptcha="XYZ1234" >}}

