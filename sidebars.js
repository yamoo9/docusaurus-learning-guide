module.exports = {
  docs: [
    {
      type: 'category', // doc | link | ref | category 중 택 1
      // collapsed: false,
      label: '튜토리얼',
      // docs 디렉토리 내부의 md 파일
      items: [
        'getting-started',
        'create-a-page',
        'create-a-document',
        // 'my-first-doc',
        'create-a-blog-post',
        'markdown-features',
        'thank-you',
      ],
    },

    // 멀티플 사이드바
    {
      type: 'category',
      label: '가이드',
      items: [
        'intro-documentation',
        'intro-blog',
        'style-layout',
        // 중첩 사이드바 아이템 설정
        // {
        // 문서: ['intro-documentation'],
        // },
      ],
    },

    // 외부 링크
    // {
    //   type: 'link',
    //   label: '이듬(E.UID)',
    //   href: 'https://euid.dev',
    // },

    // 문서 ID 참조
    // {
    //   type: 'ref',
    //   id: 'getting-started',
    // },
  ],
}
