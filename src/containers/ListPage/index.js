import React, { Component } from 'react';
import { Layout, Icon, Tabs, Avatar } from 'antd';
const {
    Header, Content,
} = Layout;

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class ListPage extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <div className="header-left">
                        <Icon style={{ fontSize: '22px' }} type="left" onClick={() => this.props.history.goBack()} />
                        <Icon style={{ fontSize: '22px', marginLeft: 20 }} type="home" onClick={() => this.props.history.push('/')} />
                    </div>
                    <div className="logowrapper">
                        <img src="https://www.logolynx.com/images/logolynx/6c/6c59330429874bc3acf39f9eb7fec012.jpeg" alt="" width="150" height="50" />
                    </div>
                    <div className="header-right">
                        <Icon style={{ fontSize: '18px' }} type="phone" />
                    </div>
                </Header>
                <Content>
                    <div className="filter">
                        <Tabs defaultActiveKey="5" onChange={callback}>
                            <TabPane tab="Moving to" key="1">Content of Tab Pane 1</TabPane>
                            <TabPane tab="Type" key="2">Content of Tab Pane 2</TabPane>
                            <TabPane tab="Size" key="3">Content of Tab Pane 3</TabPane>
                            <TabPane tab="From" key="4">Content of Tab Pane 3</TabPane>
                            <TabPane tab="Date" key="5">
                                <div className="calender">
                                    <div className="datewrapper disable">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                    </div>
                                    <div className="datewrapper disable">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                    </div>
                                    <div className="datewrapper">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                        <p className="bestprice">Best Price</p>
                                    </div>
                                    <div className="datewrapper active">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                    </div>
                                    <div className="datewrapper">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                        <p className="bestprice">Best Price</p>
                                    </div>
                                    <div className="datewrapper">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                    </div>
                                    <div className="datewrapper">
                                        <p className="day">M</p>
                                        <p className="date">30</p>
                                        <p className="month">JAN</p>
                                    </div>
                                </div>

                                <div className="listwrapper">
                                    <div className="listitem">
                                        <div className="listdetail">
                                            <div className="listdetailitems">
                                                <div className="avtar">
                                                    <Avatar size={34} icon="user" />
                                                </div>
                                                <div className="packingtitledetails">
                                                    <p>
                                                        <span className="packagetitle">
                                                            Partial Pack
                                                        </span>
                                                        <span className="bestprice">Best Price</span>
                                                    </p>
                                                    <p>
                                                        <span className="movers">
                                                            4 Movers
                                                        </span>
                                                        <span className="price"><strong>$1231</strong></span>
                                                    </p>
                                                    <p>
                                                        <span className="hours">
                                                            3 Hours
                                                        </span>
                                                        <span className="extra-hours">*$150 for each additional hours</span>
                                                    </p>
                                                </div>
                                                <Icon style={{ fontSize: '16px', position: 'absolute', top: 30, right: -5 }} type="right" />
                                            </div>
                                        </div>
                                        <div className="servicedetails">
                                            <ul>
                                                <li>include all boxes &amp; tapes</li>
                                                <li>we will do all packing</li>
                                                <li>quilt pad wrape do all your furniture</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="listitem">
                                        <div className="listdetail">
                                            <div className="listdetailitems">
                                                <div className="avtar">
                                                    <Avatar size={34} icon="user" />
                                                </div>
                                                <div className="packingtitledetails">
                                                    <p>
                                                        <span className="packagetitle">
                                                            Full Pack
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="movers">
                                                            6 Movers
                                                        </span>
                                                        <span className="price"><strong>$2499</strong></span>
                                                    </p>
                                                    <p>
                                                        <span className="hours">
                                                            4 Hours
                                                        </span>
                                                        <span className="extra-hours">*$150 for each additional hours</span>
                                                    </p>
                                                </div>
                                                <Icon style={{ fontSize: '16px', position: 'absolute', top: 30, right: -5 }} type="right" />
                                            </div>
                                        </div>
                                        <div className="servicedetails">
                                            <ul>
                                                <li>include all boxes &amp; tapes</li>
                                                <li>we will do all packing</li>
                                                <li>quilt pad wrape do all your furniture</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="listitem">
                                        <div className="listdetail">
                                            <div className="listdetailitems">
                                                <div className="avtar">
                                                    <Avatar size={34} icon="user" />
                                                </div>
                                                <div className="packingtitledetails">
                                                    <p>
                                                        <span className="packagetitle">
                                                            i'll pack myself
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <span className="movers">
                                                            2 Movers
                                                        </span>
                                                        <span className="price"><strong>$1231</strong></span>
                                                    </p>
                                                    <p>
                                                        <span className="hours">
                                                            2 Hours
                                                        </span>
                                                        <span className="extra-hours">*$150 for each additional hours</span>
                                                    </p>
                                                </div>
                                                <Icon style={{ fontSize: '16px', position: 'absolute', top: 30, right: -5 }} type="right" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listitem">
                                        <div className="listdetail">
                                            <div className="listdetailitems">
                                                <div className="avtar">
                                                    <Avatar size={34} icon="user" />
                                                </div>
                                                <div className="packingtitledetails">
                                                    <p>
                                                        <span className="packagetitle">
                                                            cutomize
                                                        </span>
                                                    </p>
                                                </div>
                                                <Icon style={{ fontSize: '16px', position: 'absolute', top: 10, right: -5 }} type="right" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </TabPane>
                            <TabPane tab="Price" key="6">Content of Tab Pane 3</TabPane>
                        </Tabs>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default ListPage;
