let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");//来源的域名和端口号
    res.header('Access-Control-Allow-Headers', "Content-Type,Accept");//允许的跨域头
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,OPTIONS,DELETE");//允许的方法
    //如果请求的方法名是OPTIONS的话，则直接结束 请求
    //options探测请求 当客户端发送post请求之后行发送一个options请求，看看服务器支持不支持post请求
    if (req.method == 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        next();
    }
});
app.use(bodyParser.json());
let sliders = require('./mock/slider');
app.get('/getSliders', function (req, res) {
    res.json(sliders);
});
app.listen(3001);