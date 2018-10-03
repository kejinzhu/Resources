import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Near extends Component {
    render() {
        return (<div>附近</div>)
    }
}
export default connect()(Near);