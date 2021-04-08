/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: '도큐사우르스 러닝 가이드',
  tagline: '콘텐츠에 보다 집중할 수 있도록 도와주는 멋진 웹 사이트 빌딩 도구',

  // 배포 설정
  url: 'https://learn-docusaurus.netlify.com',
  baseUrl: '/',

  // 'ignore' | 'log' | 'warn' | 'error' | 'throw'
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yamoo9', // GitHub 조직/사용자_이름
  projectName: 'ducusaurus-learning-guide', // GitHub 저장소 이름

  // 테마 구성
  themeConfig: {
    // algolia 검색 설정
    algolia: {
      // Search-Only API Key
      apiKey: '7fb904901526f61b8febfa6db2594742',
      indexName: 'learn-docusaurus',
      appId: 'LQSAM0X2GF',
      // contextualSearch: true,
      searchParameters: {},
    },

    // 사이드바 감춤 설정 활성화
    hideableSidebar: true,

    // 사이드바 펼침/접힘 기능 비활성화
    // sidebarCollapsible: false,

    // 내비게이션 바
    navbar: {
      title: '도큐사우르스 러닝 가이드',
      logo: {
        alt: 'Docusaurus',
        src: 'img/logo.svg',
        srcDark: 'img/docusaurus_speed.svg',
        // href: 'https://docusaurus.io/',
        // target: '_blank',
      },
      items: [
        {
          activeBasePath: 'docs',
          label: '문서',
          position: 'right',
          to: 'docs/',
          // 서브 내비게이션 아이템 설정
          // items: [
          //   { label: '튜토리얼', to: 'docs/' },
          //   { label: '가이드', to: 'docs/intro-documentation' },
          // ],
        },
        { to: 'blog', label: '블로그', position: 'right' },
        {
          href: 'https://euid.dev',
          label: '이듬',
          position: 'right',
        },
        {
          href: 'https://github.com/yamoo9/ducusaurus-learning-guide',
          label: '깃허브',
          position: 'right',
        },
      ],
    },

    // 푸터
    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '시작하기',
              to: 'docs/',
            },
          ],
        },
        {
          title: '커뮤니티',
          items: [
            {
              label: '스택 오버플로우',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: '디스코드',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: '트위터',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '기타.',
          items: [
            {
              label: '블로그',
              to: 'blog',
            },
            {
              label: '깃허브',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 이듬(E.UID), Inc.`,
    },

    // 코드 블록
    // 참고: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes
    prism: {
      theme: require('prism-react-renderer/themes/duotoneDark'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
  },

  // 프리셋 설정
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // 사이드바 경로 설정
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/yamoo9/ducusaurus-learning-guide/edit/main/website',
        },
        blog: {
          blogTitle: 'Docusaurus 블로그!',
          blogDescription: 'Docusaurus 기반 블로그!',
          showReadingTime: true,
          editUrl:
            'https://github.com/yamoo9/ducusaurus-learning-guide/edit/main/website/blog',
          // 참고: https://docusaurus.io/docs/blog#feed
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 이듬(E.UID), Inc.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // 플러그인 설정
  // plugins: [
  //   [
  //     require.resolve('docusaurus-lunr-search'),
  //     {
  //       languages: ['en'],
  //     },
  //   ],
  // ],
}
