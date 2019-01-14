import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Pagination } from 'antd';

class ContentTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [{
                title: '#',
                dataIndex: 'name',
                render: text => <a href="#">{text}</a>,
            }, {
                title: 'SKU ID',
                dataIndex: 'sku',
            }, {
                title: 'SKU名称',
                dataIndex: 'skuName',
            }, {
                title: '版权来源',
                dataIndex: 'copyrightSource',
            }, {
                title: '创建时间',
                dataIndex: 'created_time',
            }, {
                title: '预览',
                dataIndex: 'viewAuthority',
            }],
            data: [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            }, {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            }, {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            }, {
                key: '4',
                name: 'Disabled User',
                age: 99,
                address: 'Sidney No. 1 Lake Park',
            }]
        }
    }
    state = {
        selectedRowKeys: [],
    };
    selectRow = (record) => {
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    }
    showTotal = (total) => {
        return `共 ${total} 条`;
    }
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>上一页</a>;
        } if (type === 'next') {
            return <a>下一页</a>;
        }
        return originalElement;
    }
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
        };
        return (
            <div>
                <Table
                    rowSelection={rowSelection}
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    onRow={(record) => ({
                        onClick: () => {
                            this.selectRow(record);
                        },
                    })}
                    pagination={false}
                />
                <Pagination
                    total={500}
                    showTotal={total => `共 ${total} 条`}
                    pageSize={20}
                    defaultCurrent={1}
                    itemRender={this.itemRender} 
                    className="table_pagination fr"/>
            </div>
        );
    }
}
export default ContentTable
