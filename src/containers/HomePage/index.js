import React, { Component } from 'react';
import { Layout, Button, } from 'antd';

const {
    Content,
} = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Content className="content">
                    <h1>HomePage</h1>
                    <Button type="primary" onClick={() => this.props.history.push('/list')}>Go to ListPage</Button>
                </Content>
            </Layout>
        );
    }
}

export default HomePage;
