# 웹사이트

이 웹 사이트는 [Docusaurus](https://docusaurus.io/)를 사용해 구축되었습니다.

## 설치

이 명령은 개발 과정에서 필요한 패키지를 설치합니다.

```console
npm i
```

## 로컬 개발

이 명령은 로컬 개발 서버를 시작하고 브라우저 창을 엽니다. 대부분 변경 사항은 서버를 다시 시작하지 않고도 실시간으로 반영됩니다.

```console
npm start
```


## 빌드

이 명령은 정적 콘텐츠를 `build '디렉토리에 생성합니다. 생성된 정적 콘텐츠는 호스팅 서비스를 사용하여 서비스 할 수 있습니다.

```console
npm run build
```


## 배포

GitHub 페이지를 사용해 호스팅 할 경우,  이 명령을 사용해 `gh-pages` 브랜치로 푸시합니다.

```console
GIT_USER=<GitHub 사용자_이름> USE_SSH=true npm run deploy
```