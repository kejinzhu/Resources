/**
 * 在此我们定义二个工具方法，一个用来发送get请求，一个用来发送post请求
 */
//pollyfill 在低版本浏览器，如果不兼容fetch可以实一兼容
//import 'whatwg-fetch';
const HOST = 'http://localhost:3000';
export function get(url) { //   url=/getSliders
    //response是完整的响应对象，里面有响应头，响应体 状态码。.json()的方法就是把响应体转成一个JSON对象并且返回
    return fetch(HOST + url).then(response => response.json());
}

export function post(url, data) {
    return fetch(HOST + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",//告诉服务器请求体的类型是json
            "Accept": "application/json"//告诉 服务器我客户端想接收json
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}