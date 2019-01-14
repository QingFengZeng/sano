import React, { Component } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import '../App.css'

//自定义组件SiderDemo
class SiderDemo extends Component {
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
            <Menu className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                {/* <div className="logo">SANO</div> */}
                <Menu.SubMenu index="1" title="客户">
                    <Menu.Item index="1-1">选项1</Menu.Item>
                    <Menu.Item index="1-2">选项2</Menu.Item>
                    <Menu.Item index="1-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="2" title="客户">
                    <Menu.Item index="2-1">选项1</Menu.Item>
                    <Menu.Item index="2-2">选项2</Menu.Item>
                    <Menu.Item index="2-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="3" title="商品中心">
                    <Menu.Item index="3-1">选项1</Menu.Item>
                    <Menu.Item index="3-2">选项2</Menu.Item>
                    <Menu.Item index="3-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="4" title="任务协作">
                    <Menu.Item index="4-1">选项1</Menu.Item>
                    <Menu.Item index="4-2">选项2</Menu.Item>
                    <Menu.Item index="4-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="5" title="生产">
                    <Menu.Item index="5-1">选项1</Menu.Item>
                    <Menu.Item index="5-2">选项2</Menu.Item>
                    <Menu.Item index="5-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="6" title="质检中心">
                    <Menu.Item index="6-1">选项1</Menu.Item>
                    <Menu.Item index="6-2">选项2</Menu.Item>
                    <Menu.Item index="6-3">选项3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu index="7" title="行政">
                    <Menu.Item index="7-1">选项1</Menu.Item>
                    <Menu.Item index="7-2">选项2</Menu.Item>
                    <Menu.Item index="7-3">选项3</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        );
    }
    onSelect = () => {

    }
}

//输出组件
export default SiderDemo;