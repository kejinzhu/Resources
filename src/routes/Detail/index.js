import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Detail extends Component {
    render() {
        return (<div>详情页</div>)
    }
}
export default connect()(Detail);