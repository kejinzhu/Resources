import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.less'
class Home extends Component {
    render() {
        return (<div>首页</div>)
    }
}
export default connect()(Home);