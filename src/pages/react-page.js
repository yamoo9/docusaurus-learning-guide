import React from 'react'
import Layout from '@theme/Layout'

/* -------------------------------------------------------------------------- */

function ReactPage() {
  return (
    <Layout title="React 페이지 컴포넌트 만들기">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
          height: '95vh',
          fontSize: '20px',
        }}
      >
        <h1>React 페이지</h1>
        <p>이 페이지는 React를 사용해 만들어졌습니다. 👀</p>
      </div>
    </Layout>
  )
}

export default ReactPage
