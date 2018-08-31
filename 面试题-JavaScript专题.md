---
title: 面试题-JavaScript专题
copyright: true
date: 2018-08-30 23:45:52
categories: 面试题
tags:
    - 面试题
    - JavaScript专题
---
## 介绍js的基本数据类型
undefined、null、boolean、number、string
## js有哪些内置对象？
- 数据封装类对象：Object、Array、Boolean、Number 和 String
- 其他对象：Function、Arguments、Math、Date、RegExp、Error
## this对象的理解
- this总是指向函数的直接调用者（而非间接调用者）；
- 如果有new关键字，this指向new出来的那个对象；
- 在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
## eval是做什么的？
它的功能是把对应的字符串解析成JS代码并运行；
应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');
## DOM怎样添加、移除、移动、复制、创建和查找节点

```javascript
// 创建新节点
createDocumentFragment()    //创建一个DOM片段
createElement()   //创建一个具体的元素
createTextNode()   //创建一个文本节点
// 添加、移除、替换、插入
appendChild()
removeChild()
replaceChild()
insertBefore() //在已有的子节点前插入一个新的子节点
// 查找
getElementsByTagName()    //通过标签名称
getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
getElementById()    //通过元素Id，唯一性
```
## null和undefined的区别？
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。

** undefined：**
- （1）变量被声明了，但没有赋值时，就等于undefined。
- （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
- （3）对象没有赋值的属性，该属性的值为undefined。
- （4）函数没有返回值时，默认返回undefined。

** null：**
- （1） 作为函数的参数，表示该函数的参数不是对象。
- （2） 作为对象原型链的终点。

具体差别可查看这篇文章：http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html
## new操作符具体干了什么呢?
-（1）创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
-（2）属性和方法被加入到 this 引用的对象中。
-（3）新创建的对象由 this 所引用，并且最后隐式的返回 this 。
## JSON 的了解？
JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小。
格式：采用键值对，例如：{'age':'12', 'name':'back'}
## call() 和 apply() 的区别和作用？
apply()函数有两个参数：第一个参数是上下文，第二个参数是参数组成的数组。如果上下文是null，则使用全局对象代替。
如：function.apply(this,[1,2,3]);
call()的第一个参数是上下文，后续是实例传入的参数序列。
如：function.call(this,1,2,3);
## 如何获取UA（用户代理）？

```javascript
function whatBrowser() {  
    document.Browser.Name.value=navigator.appName;  
    document.Browser.Version.value=navigator.appVersion;          document.Browser.Code.value=navigator.appCodeName;  
    document.Browser.Agent.value=navigator.userAgent;  
}  
navigator.userAgent 获取浏览器UA
```
## JavaScript原型，原型链 ? 有什么特点？
- （1）原型对象也是普通的对象，是对象一个自带隐式的 __proto__ 属性，原型也有可能有自己的原型，如果一个原型对象的原型不为null的话，我们就称之为原型链。
- （2）原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链。
## Flash、Ajax各自的优缺点，在使用中如何取舍？
Flash适合处理多媒体、矢量图形、访问机器；对CSS、处理文本上不足，不容易被搜索。
Ajax对CSS、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。
共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM
## 什么是闭包？
闭包，官方对闭包的解释是：一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。闭包的特点：
- （1）作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
- （2） 一个闭包就是当一个函数返回时，一个没有释放资源的栈区。

简单的说，Javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包。
## javascript里面的继承怎么实现，如何避免原型链上面的对象共享
用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量
## ajax过程
- (1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.
- (2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
- (3)设置响应HTTP请求状态变化的函数.
- (4)发送HTTP请求.
- (5)获取异步调用返回的数据.
- (6)使用JavaScript和DOM实现局部刷新.
## AMD和CMD的区别？
- AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
- CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。

类似的还有 CommonJS Modules/2.0 规范，是 BravoJS 在推广过程中对模块定义的规范化产出。

这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的。
目前这些规范的实现都能达成浏览器端模块化开发的目的。

区别：

1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.

2. CMD 推崇依赖就近，AMD 推崇依赖前置。

```javascript
// CMD
define(function(require, exports, module) {
    var a = require('./a') a.doSomething()
    // 此处略去 100 行   
    var b = require('./b')
    // 依赖可以就近书写   
        b.doSomething()
    // ... 
})
// AMD 默认推荐的是
define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好    
        a.doSomething()
// 此处略去 100 行   
        b.doSomething()
})
```
## ajax不可避免的问题都有什么？如何解决呢？
- （Q1）ajax以何种数据格式交换数据和跨域的问题如何解决

- （Q2）这两大问题，都有不同的解决方案，但是最被推崇的就是用JSON来传数据，靠JSONP来跨域
## 你有哪些性能优化的方法？
- （1） 减少http请求次数：CSS Sprites, JS、CSS源码压缩、图片大小控制合适；网页Gzip，CDN托管，data缓存 ，图片服务器。
- （2） 前端模板 JS+数据，减少由于HTML标签导致的带宽浪费，前端用变量保存AJAX请求结果，每次操作本地变量，不用请求，减少请求次数
- （3） 用innerHTML代替DOM操作，减少DOM操作次数，优化javascript性能。
- （4） 当需要设置的样式很多时设置className而不是直接操作style。
- （5） 少用全局变量、缓存DOM节点查找的结果。减少IO读取操作。
- （6） 避免使用CSS Expression（css表达式)又称Dynamic properties(动态属性)。
- （7） 图片预加载，将样式表放在顶部，将脚本放在底部  加上时间戳。
## 什么叫优雅降级和渐进增强？
### 优雅降级：
Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.

### 渐进增强：
从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。
## 哪些常见操作会造成内存泄漏？
内存泄漏：指任何对象在您不再拥有或需要它之后仍然存在。
- 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
- 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）
## 