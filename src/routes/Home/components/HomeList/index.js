import React, { Component } from 'react';
import Loading from '@/components/Loading';
import './index.less'
import {Link} from 'react-router-dom';
export default class HomeLessons extends Component {
    render() {
        let {getLessons,lessons:{list,hasMore,loading}} = this.props;
        return (
            <div className="home-lessons">
                <div className="lessons-title">
                    <i className="iconfont icon-kecheng-copy"></i>
                    <span>全部课程</span>
                </div>
                {
                    list.map((item,index)=>(
                        <Link key={index} to={{pathname:'/detail',state:item}}>
                           <div  className="lesson">
                              <img src={item.poster} alt={item.title}/>
                              <p>{item.title}</p>
                              <p>{item.price}</p>
                           </div>
                        </Link>
                    ))
                }
                {
                    loading?(<Loading/>):(!hasMore&&<div className="load-more">后面没有了</div>)
                }
            </div>
        )
    }
}