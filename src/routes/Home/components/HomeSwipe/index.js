import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.less';
export default class HomeSwipe extends Component {
    render() {
        let {sliders} = this.props;
        return (
            <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}