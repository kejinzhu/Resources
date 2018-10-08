import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
// transition-group
import Transition from 'react-transition-group/Transition';
import './index.less';
import { Icon } from 'antd';
const duration = 300,
      defaultStyle = {
          transition: `display ${duration}ms linear`,
          display:'none'
      },
      transitionStyle = {
          entering: { display:'none'},
          entered: { display:'block'}
      }
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_861987_i5i8gvf1oe.js',
});
class TopBar extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            in:false
        };
    }
    render(){
        return (<header className="headerNavBar">
        {/* 首页导航显示 */}
            <div className="homeBox">
                <div className="contentBox">
                    <div className="weatherBox">
                        <Link to="/">
                            <span className="weather">
                                <Icon type="cloud" />
                                <span>24°</span>
                            </span>
                            <span className="address">北京</span>
                            <Icon type="down" style={{
                                fontSize: '0.18rem',
                                color:'#666',
                                fontWeight:'bold'
                            }} />
                        </Link>
                    </div>
                    <div className="search">
                        <input type="text" onChange={()=>{}} value="田老师红烧肉,外卖满39减10"/><Icon type="search"/>
                    </div>
                    <div className="plus" onClick={ev=>{
                        this.setState({
                            in:!this.state.in
                        })
                    }}>
                        <Icon type='plus'/>
                    </div>
                </div>
                <div className="showPlus">
                    <Transition in={this.state.in} timeout={0}>
                        {state=>{
                            return (<ul style={{ ...defaultStyle,
                            ...transitionStyle[state]}}>
                                <Icon type="caret-up" />
                                <li>
                                    <Link to="">
                                        <IconFont type="icon-scan" />
                                        <span>扫一扫</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <IconFont type="icon-danche" />
                                        <span>骑单车</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <IconFont type="icon-fapiao" />
                                        <span>开发票</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <IconFont type="icon-erweima1" />
                                        <span>付款码</span>
                                    </Link>
                                </li>
                            </ul>)
                        }}
                    </Transition>
                </div>
            </div>
        </header>)
    }
}
export default withRouter(connect()(TopBar));