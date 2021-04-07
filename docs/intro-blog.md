---
title: 블로그(Blog)
---

Markdown, Front Matters를 사용해 블로그 포스트를 작성할 수 있습니다.

```md
---
title: Docusaurus v2를 만나보세요.
author: yamoo9
author_title: 이듬(E.UID) 블렌디르 러닝 강사
author_url: https://github.com/yamoo9
author_image_url: https://github.com/yamoo9.png
tags: [이듬, docusaurus-v2]
description: 야무와 함께 공부하는 도큐사우르스!!
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

이 블로그에 오신 것을 환영합니다. 이 블로그는 [**Docusaurus 2**] (https://docusaurus.io/)로 작성되었습니다.

<!--truncate-->

truncate 주석 뒤에 작성된 내용은 블로그 포스트 리스트에 표시되지 않고 생략 처리됩니다.
```

## 헤더 옵션

`title`을 제외한 나머지 값은 모두 선택사항(옵션)입니다. 

속성 | 설명 
--- | ---
`author`   | 저자 이름
`author_url`  | 저자 이름이 연결 될 URL (GitHub, Twitter, Facebook 프로필 URL 등)
`author_image_url`  | 저자의 썸네일 이미지 URL
`author_title`  | 저자 소개
`title`  | 블로그 포스트 제목
`tags`  | 블로그 포스트 태그 리스트
`draft` | 블로그 포스트를 작성 중이라 게시하지 않아야 할 경우 추가하는 Boolean 플래그
`description` | SEO 최적화를 위한 \<meta name="description" content="..."/\> 또는 \<meta property="og:description" content="..."/\>로 설정될 포스트 설명.
`image` | 포스트 링크에 표시될 표지 또는 썸네일 이미지 URL
`hide_table_of_contents` | 오른쪽 목차를 숨길 지 여부 설정 (기본 값 `false`)

## 블로그 포스트 내용 생략 (truncate)

모든 블로그 포스트 리스트를 볼 때 너무 긴 글인 경우, `<!--truncate-->` 마커(maker)를 사용해 내용을 생략 처리할 수 있습니다.

```md
이 블로그에 오신 것을 환영합니다. 이 블로그는 [**Docusaurus 2**] (https://docusaurus.io/)로 작성되었습니다.

<!--truncate-->

:::info 트렁케이트
`<!-- truncate -->` 주석 뒤에 작성된 내용은 블로그 포스트 리스트에 표시되지 않고 생략 처리됩니다.
:::
```