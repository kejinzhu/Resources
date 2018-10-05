import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter} from 'react-router-dom';
import './index.less';
class FootBar extends Component {
    render() {
        return (<nav className="navBar">
            <NavLink exact to="/" activeClassName="active">
                <i className="icon-home"></i>
                <span>首页</span>
            </NavLink>
            <NavLink to="/near" activeClassName="active">
                <i className="icon-near"></i>
                <span>附近</span>
            </NavLink>
            <NavLink to="/find" activeClassName="active">
                <i className="icon-find"></i>
                <span>发现</span>
            </NavLink>
            <NavLink to="/order" activeClassName="active">
                <i className="icon-order"></i>
                <span>订单</span>
            </NavLink>
            <NavLink to="/mime" activeClassName="active">
                <i className="icon-mime"></i>
                <span>我的</span>
            </NavLink>
        </nav>)
    }
}
export default withRouter(connect()(FootBar));