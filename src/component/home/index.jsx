import React, { Component } from 'react'

import Top from './component/top'
// import Mune from './component/mune'
// import Conter from './component/conter'
import {Layout} from 'antd';
import './index.scss'

const { Header, Content, Footer } = Layout



export default class index extends Component {


  render() {
    return (
      <>
      <Layout className="layout">
        <Header>
          <Top />
        </Header>
        <Content >

        </Content>
        <Footer >

        </Footer>
      </Layout>
      </>
    )
  }
}
