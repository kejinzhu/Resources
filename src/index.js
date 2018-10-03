import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

// 导入antd
import {LocaleProvider} from 'antd';
import zh_CN from'antd/lib/locale-provider/zh_CN';

//导入公共CSS样式
import './static/css/reset.css';
import './static/css/common.less';

// 导入组件
// import TopBar from './components/TopBar';
import FootBar from './components/FootBar';
// import Detail from './routes/Detail';
import Find from './routes/Find';
import Mime from './routes/Mime';
import Near from './routes/Near';
import Home from './routes/Home';
import Order from './routes/Order';

// 引入provider store
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <LocaleProvider locale={zh_CN}>
            <div>
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/find" component={Find} />
                        <Route path="/near" component={Near} />
                        <Route path="/order" component={Order} />
                        <Route path="/mime" component={Mime} />
                        <Redirect to="/?from=404"/>
                    </Switch>
                </main>
                <FootBar/>
            </div>
        </LocaleProvider>
    </HashRouter>
</Provider>,root);
