import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Mime extends Component {
    render() {
        return (<div>我的</div>)
    }
}
export default connect()(Mime);