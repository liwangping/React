import React from 'react';
import { Layout, Row, Col, Avatar, Input,  Menu, Dropdown, Icon, Badge } from 'antd';
  

const{Header, Footer, Sider, Content} = Layout;

class PageLayout extends React.Component{
    render() {
        return (
            <Layout>
                <Header>
                    <Row>
                        <Col span = {10}>
                            React + Antd 实战
                        </Col>
                    </Row>
                </Header>
                <Layout></Layout>
                <Footer></Footer>
            </Layout>
        )
    }
}

export default PageLayout