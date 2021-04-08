---
title: GitHub 배포
---

사이트를 관리할 GitHub 저장소를 생성한 후, 배포할 GitHub 정보를 `docusaurus.config.js`에 다음과 같이 입력합니다.

```js {2-3} title="docusaurus.config.js"
module.exports = {
  url: 'https://yamoo9.github.io',
  projectName: 'learn-docusaurus',
  baseUrl: '/learn-docusaurus',
  organizationName: 'yamoo9',
  // ...
}
```

변경사항을 커밋, 푸시한 후 다음 명령어를 입력 실행해 GitHub Pages로 배포할 수 있습니다.

```shell
GIT_USER=yamoo9 npm run deploy
```

:::tip 자동 배포
자동 배포 설정은 직접 [GitHub 액션](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions)을 설정해야 합니다.
:::
