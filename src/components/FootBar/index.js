import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter} from 'react-router-dom';
import './index.less';
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_861987_i5i8gvf1oe.js',
});
class FootBar extends Component {
    render() {
        return (<footer className="footerNavBar">
            <NavLink exact to="/" activeClassName="active">
                {/* <i className="icon-home"></i> */}
                <Icon type="home" theme = "filled"/>
                <span>首页</span>
            </NavLink>
            <NavLink to="/near" activeClassName="active">
                {/* <i className="icon-near"></i> */}
                <Icon type="environment" theme="filled"/>
                <span>附近</span>
            </NavLink>
            <NavLink to="/find" activeClassName="active">
                {/* <i className="icon-find"></i> */}
                <Icon type="eye" theme="filled"/>
                <span>发现</span>
            </NavLink>
            <NavLink to="/order" activeClassName="active">
                {/* <i className="icon-order"></i> */}
                <Icon type="file-text" theme="filled"/>
                <span>订单</span>
            </NavLink>
            <NavLink to="/mime" activeClassName="active">
                {/* <i className="icon-mime"></i> */}
                <IconFont type="icon-weibiaoti-_wode" theme="filled"/>
                <span>我的</span>
            </NavLink>
        </footer>)
    }
}
export default withRouter(connect()(FootBar));