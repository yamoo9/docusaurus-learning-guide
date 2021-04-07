/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '도큐사우르스 러닝 가이드',
  tagline: '콘텐츠에 보다 집중할 수 있도록 도와주는 멋진 웹 사이트 빌딩 도구',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  // 'ignore' | 'log' | 'warn' | 'error' | 'throw'
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yamoo9', // GitHub 조직/사용자_이름
  projectName: 'ducusaurus-learning-guide', // GitHub 저장소 이름
  themeConfig: {
    // 사이드바 감춤 설정 활성화
    hideableSidebar: true,

    // 사이드바 펼침/접힘 기능 비활성화
    // sidebarCollapsible: false,

    // 내비게이션바
    navbar: {
      title: '도큐사우르스 러닝 가이드',
      logo: {
        alt: 'Docusaurus',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '문서',
          position: 'right',
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
  },
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
}
