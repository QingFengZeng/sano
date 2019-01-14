import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import '../App.css'

//自定义组件breadcrumb
class BreadCrumb extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Breadcrumb separator="/">
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>我的颜色花稿</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}
//输出组件
export default BreadCrumb;
