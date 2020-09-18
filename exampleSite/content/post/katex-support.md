---
authors:
  - iara
title: KaTeX support
date: 2020-09-08
description: A brief guide on KaTeX
katex: true
categories:
  - themes
tags:
  - customization
  - math
images:
  - /images/katex.png
---

Mathematical notation in a Hugo project can be enabled by using third party JavaScript libraries.
<!--more-->

{{<figure src="/images/katex.png">}}

### Usage

To use [KaTex](https://katex.org/) all you need to do is set `katex` to `true` in Front Matter.

#### Yaml

```yaml
title: KaTeX support
date: 2020-09-01
description: A brief guide to setup KaTeX
katex: true
```

#### TOML

```toml
title = "KaTeX support"
date = "2020-09-01"
description = "A brief guide on KaTeX"
katex = true
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
