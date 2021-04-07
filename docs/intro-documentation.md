---
title: 문서(Docs)
---

문서(doc)는 Markdown 파일을 계층적으로 구성하는 방법을 제공합니다.

## 문서 ID

모든 문서는 고유한 `id`를 가지며, 기본적으로 문서 디렉토리에 상대적인 "**문서 이름(확장자 제외)**"을 말합니다.
예를 들어 `greeting.md` 문서의 `id`는 `greeting`이고, `guide/hello.md` 문서의 `id`는 `guide/hello`입니다.

```shell {3,5}
website # 사이트 루트 디렉토리
└── docs
   ├── greeting.md
   └── guide
      └── hello.md
```

만약 문서 ID를 변경하고자 한다면? 파일 이름을 변경하는 대신, 프론트 매터(Front Matters) `id` 값을 사용해 변경할 수 있습니다.
예를 들어 아래와 같이 변경한 경우, 문서 ID는 `guide/hey`가 됩니다.

```md title="docs/guide/hello.md"
---
id: hey
---
```

문서 URL을 변경하고 싶을 경우? `slug` 값을 사용해 바꿀 수 있습니다.

```md title="docs/guide/hello.md"
---
id: hey
slug: hey-you
---
```

:::note 노트
필요한 경우 절대 또는 상대 경로의 슬러그(slug)를 사용할 수도 있습니다.

- 절대 경로 슬러그 → `slug: /my-slug`, `slug: /`, ...
- 상대 경로 슬러그 → `slug: my-slug`, `slug: ../my-slug`, ...
:::
