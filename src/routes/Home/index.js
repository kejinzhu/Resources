import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import HomeHeader from './components/HomeHeader';
import HomeSwipe from './components/HomeSwipe';
import action from '../../store/action';
import './index.less'
class Home extends Component {
    // componentDidMount() {
    //     this.props.getSliders();
    // }
    render() {
        console.log(this.props);
        
        let {sliders} = this.props;
        return (
        <Fragment>
            <HomeHeader/>
            <div className="main-content">
                <HomeSwipe sliders={sliders} />
            </div>
        </Fragment>)
    }
}
export default connect(
    state => state.home,
    action.home
)(Home);