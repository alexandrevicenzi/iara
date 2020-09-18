---
authors:
  - iara
title: MathJax support
date: 2020-09-01
description: A brief guide on MathJax
categories:
  - themes
tags:
  - customization
  - math
mathjax: true
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

### Usage

To use [MathJax](https://www.mathjax.org/) all you need to do is set `mathjax` to `true` in Front Matter.

#### Yaml

```yaml
title: MathJax support
date: 2020-09-01
description: A brief guide to setup MathJax
mathjax: true
```

#### TOML

```toml
title = "MathJax support"
date = "2020-09-01"
description = "A brief guide on MathJax"
mathjax = true
```

### Examples

#### Inline Math

```txt
{{</* math.inline */>}}
\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
{{</*/ math.inline */>}}
```

{{< math.inline >}}
\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
{{</ math.inline >}}

#### Block Math

```tex
$$
\varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
```

$$
\varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } } 
$$
