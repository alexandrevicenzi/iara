+++
authors = [
    "iara"
]
date = "2020-09-01"
title = "Theme menus"
description = "Menus help users navigate on you site"
summary = "Menus help users navigate on you site"
tags = [
    "customization",
    "menus",
]
categories = [
    "themes",
]
+++

Menus help users navigate on you site, that's why there are many available for use.

You can set menus on `config.toml`. Read more about [here](https://gohugo.io/content-management/menus/)

This theme offers 3 sections of menus:

- Main menu - All pages
- Footer menus - All pages
- Terms menus - All pages
- Carousel menu - Home only

Main Menu allows Dropdowns, but only one level.

Footer menus range from 1 to 6.

Carousel menu becomes a carousel if items are bigger than the current screen, ideal for mobile.

## Usage

```toml
[menu]
  #
  # Main Menu
  #
  [[menu.main]]
  name = "About"
  identifier = "about"
  weight = 10
  url = "/about/"

  [[menu.main]]
  name = "Contact"
  identifier = "contact"
  weight = 20
  url = "/contact/"

  [[menu.main]]
  name = ""
  weight = 1
  url = "/"
  pre = '<i class="fas fa-home"></i>'

  [[menu.main]]
  name = "Hugo"
  weight = 999
  url = "https://gohugo.io/"

  #
  # Dropdown Begin
  #
  # Only one level is supported
  # Dropdown URL has no effect if set
  [[menu.main]]
  name = "Dropdown"
  identifier = "dropdown"
  weight = 100

  [[menu.main]]
  parent = "dropdown"
  name = "Posts"
  weight = 100
  identifier = "posts"
  url = "/post/"

  [[menu.main]]
  parent = "dropdown"
  name = "Categories"
  weight = 200
  identifier = "categories"
  url = "/categories/"

  [[menu.main]]
  parent = "dropdown"
  name = "Tags"
  weight = 300
  identifier = "tags"
  url = "/tags/"

  [[menu.main]]
  parent = "dropdown"
  name = "Authors"
  weight = 400
  identifier = "authors"
  url = "/authors/"
  #
  # Dropdown End
  #

  #
  # Carousel menu (Home only)
  #
  [[menu.carousel]]
  name = "Customization"
  weight = 1
  url = "/tags/customization/"
  [[menu.carousel]]
  name = "Authors"
  weight = 2
  url = "/authors/"
  [[menu.carousel]]
  name = "Syntax"
  weight = 3
  url = "/categories/syntax/"
  [[menu.carousel]]
  name = "About"
  weight = 4
  url = "/about/"

  #
  # Terms & Diclaimers in footer
  #
  [[menu.terms]]
  name = "Terms of Use"
  weight = 1
  identifier = "terms"
  url = "#"

  [[menu.terms]]
  name = "Privacy"
  weight = 2
  identifier = "privacy"
  url = "#"

  [[menu.terms]]
  name = "GDPR"
  weight = 3
  identifier = "gdpr"
  url = "#"

  #
  # Footer section links
  #
  [[menu.footer1]]
  name = "Artificial Inteligence"
  weight = 1
  url = "#"
  pre = "<b>"
  post = "</b>"

  [[menu.footer1]]
  name = "Machine Learning"
  weight = 2
  url = "#"

  [[menu.footer1]]
  name = "Deep Learning"
  weight = 2
  url = "#"

  [[menu.footer1]]
  name = "Natural Language Processing"
  weight = 3
  url = "#"
  badge = "New"

  [[menu.footer1]]
  name = "Robotis"
  weight = 4
  url = "#"

  [[menu.footer2]]
  name = "SBCs"
  weight = 1
  url = "#"
  pre = "<b>"
  post = "</b>"

  [[menu.footer2]]
  name = "Raspbery Pi"
  weight = 2
  url = "#"
  post = '<span class="badge badge-pill badge-success">Discount</span>'

  [[menu.footer2]]
  name = "BeagleBone"
  weight = 3
  url = "#"

  [[menu.footer2]]
  name = "ODROID"
  weight = 4
  url = "#"

  [[menu.footer2]]
  name = "Micro Bit"
  weight = 5
  url = "#"

  [[menu.footer2]]
  name = "Arduino"
  weight = 6
  url = "#"

  [[menu.footer3]]
  name = "Linux"
  weight = 1
  url = "#"
  pre = "<b>"
  post = "</b>"

  [[menu.footer3]]
  name = "Ubuntu"
  weight = 3
  url = "#"
  post = '<span class="badge badge-warning">New</span>'

  [[menu.footer3]]
  name = "Arch"
  weight = 2
  url = "#"

  [[menu.footer3]]
  name = "Debian"
  weight = 4
  url = "#"

  [[menu.footer4]]
  name = "Careers"
  weight = 1
  identifier = "careers"
  url = "#"
  pre = "<b>"
  post = "</b>"

  [[menu.footer4]]
  name = "Contact"
  weight = 2
  identifier = "contact"
  url = "#"

  [[menu.footer4]]
  name = "Press Kit"
  weight = 3
  identifier = "press-kit"
  url = "#"
```
