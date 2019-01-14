import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import ContentTable from "./table"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        };
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ searchValue: '' });
    }

    onSearchValue = (e) => {
        this.setState({ searchValue: e.target.value });
        // alert(1)
    }

    onChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }
    render() {
        const { searchValue } = this.state;
        // 判断是否显示后缀icon（带有清除功能）
        const suffix = searchValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

        return (
            <div>
                <div className="search_add_remove">
                    <Input
                        placeholder="搜索"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={searchValue}
                        onChange={this.onChange}
                        onPressEnter={this.onSearchValue}
                        ref={node => this.userNameInput = node}
                        style={{ width: 200 }}
                    />
                    <Button className="remove_btn fr">删除</Button>
                    <Button className="add_btn fr">新增</Button>
                </div>
                <div className="content_container">
                    <ContentTable />
                </div>
            </div>
        )
    }
}
//输出组件
export default Content;
