import React from 'react'
import './index.less'

function Page(props) {
  return (
    <div className='normal'>
      <div className='welcome' />
      hello world!{props.name}
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  console.log('getinitial', __isBrowser__)
  // ssr渲染模式只在服务端通过Node获取数据，csr渲染模式只在客户端通过http请求获取数据，getInitialProps方法在整个页面生命周期只会执行一次
  return __isBrowser__ ? (await window.fetch('/api/getIndexData')).json() : ctx.service.api.index()
}

export default Page
