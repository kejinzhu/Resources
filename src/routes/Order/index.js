import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Order extends Component {
    render() {
        return (<div>订单</div>)
    }
}
export default connect()(Order);