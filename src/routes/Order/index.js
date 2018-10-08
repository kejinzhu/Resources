import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Order extends Component {
    render() {
        return (<main>订单</main>)
    }
}
export default connect()(Order);