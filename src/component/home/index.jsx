import React, { Component } from 'react'
import Top from './component/top'
import Mune from './component/mune'
// import Conter from './component/conter'
import Home from '../page/home'
import {Layout} from 'antd';
import './index.scss'



const { Header,Sider, Content, Footer } = Layout



export default class Index extends Component {


  render() {
    return (
      <>
      <Layout className="layout">
      <Header><Top /></Header>
      <Layout>
        <Sider><Mune /></Sider>
        <Content>
           <Home />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
      </>
    )
  }
}
