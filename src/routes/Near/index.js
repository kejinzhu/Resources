import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.less'
class Near extends Component {
    render() {
        return (<main>附近</main>)
    }
}
export default connect()(Near);