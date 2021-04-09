---
slug: important-key
title: React의 key 속성을 다시 깨우치다.
author: 한나
author_title: 꿈꾸는 프론트엔드 개발자
author_url: https://github.com/hanna244
author_image_url: https://github.com/hanna244.png
tags: [react, key, props, pretty]
---

김한나는 깨우쳤다. React에서의 `key` 속성의 중요성을. 
한나는 `uuid()`를 남용함에 따라 문제를 곳곳에 만들었다.

<!-- truncate -->

```jsx {1,4} title="src/components/Accordion.js"
import { StyleAccordion } from './Accordion.styled'

export const Accordion = ({key, ...restProps}) => (
  <StyleAccordion key={props.key} {...restProps} />
)
```
