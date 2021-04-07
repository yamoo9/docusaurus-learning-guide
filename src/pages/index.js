import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

/* 기능 ----------------------------------------------------------------------- */

const features = [
  {
    title: '"사용하기 쉬운" 도구',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus는 쉽게 설치하고 사용할 수 있도록 설계 되었으며, 웹 사이트를
        빠르게 시작하고 실행하는 데 사용됩니다.
      </>
    ),
  },
  {
    title: '콘텐츠에 "집중!"',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus를 사용하면 사이트 제작보다 문서 작성에 보다 집중할 수
        있습니다. (<code>docs</code> 디렉토리)
      </>
    ),
  },
  {
    title: 'React로 "파워업!"',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        React를 사용해 웹 사이트 레이아웃을 확장하거나 커스텀 컴포넌트를 만들어
        활용할 수 있습니다.
      </>
    ),
  },
]

/* Feature 컴포넌트 ------------------------------------------------------------- */

function Feature({ imageUrl, title, description, ...restProps }) {
  const imgUrl = useBaseUrl(imageUrl)

  return (
    <div className={clsx('col col--4', styles.feature)} {...restProps}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={styles.featureImage}
            src={imgUrl}
            alt={title}
            title={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

/* 홈 페이지 컴포넌트 --------------------------------------------------------------- */

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Docusaurus를 사용해 원하는 사이트를 제작해보세요!"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              시작하기
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
