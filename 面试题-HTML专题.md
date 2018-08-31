---
title: 面试题-HTML专题
copyright: true
date: 2018-08-30 23:46:07
categories: 面试题
tags:
    - 面试题
    - HTML专题
---
## 常用哪几种浏览器测试？有哪些内核(Layout Engine)?
- ** 浏览器：**IE,Chrome,FireFox,Safari,Opera
- ** 内核：**Trident,Gecko,Presto,Webkit。

** 详细介绍 **

- Trident内核代表产品Internet Explorer，又称其为IE内核。Trident（又称为MSHTML），是微软开发的一种排版引擎。使用Trident渲染引擎的浏览器包括：IE、傲游、世界之窗浏览器、Avant、腾讯TT、Netscape 8、NetCaptor、Sleipnir、GOSURF、GreenBrowser和KKman等。
- Gecko内核代表作品Mozilla FirefoxGecko是一套开放源代码的、以C++编写的网页排版引擎。Gecko是最流行的排版引擎之一，仅次于Trident。使用它的最著名浏览器有Firefox、Netscape6至9。
- WebKit内核代表作品Safari、Chromewebkit 是一个开源项目，包含了来自KDE项目和苹果公司的一些组件，主要用于Mac OS系统，它的特点在于源码结构清晰、渲染速度极快。缺点是对网页代码的兼容性不高，导致一些编写不标准的网页无法正常显示。主要代表作品有Safari和Google的浏览器Chrome。
- Presto内核代表作品OperaPresto是由Opera Software开发的浏览器排版引擎，供Opera 7.0及以上使用。它取代了旧版Opera 4至6版本使用的Elektra排版引擎，包括加入动态功能，例如网页或其部分可随着DOM及Script语法的事件而重新排版。
## 说下行内元素和块级元素的区别？行内块元素的兼容性使用？(IE8 以下)
- ** 行内元素：**会在水平方向排列，不能包含块级元素，设置width无效，height无效(可以设置line-height)，margin上下无效，左右有效，padding上下左右都有效。
- ** 块级元素：**各占据一行，垂直方向排列。
- ** 兼容性：** display:inline-block *display:inline; *zoom:1;
## 说说对zoom：1的理解？
zoom:1;属性是IE浏览器的专有属性，Firefox等其它浏览器不支持。它可以设置或检索对象的缩放比例。除此之外，它还有其他一些小作用，比如触发ie的hasLayout属性，清除浮动、清除margin的重叠等。但很遗憾的是，它通不过W3C验证．
<!-- more -->
## 说说对IE的haslayout的理解？
haslayout是Windows Internet Explorer渲染引擎的一个内部组成部分。在Internet Explorer中，使用布局概念来控制元素的尺寸和定位。在理想情况下，所有元素都控制自己的尺寸和定位。但是，这在IE中会导致很大的性能问题。因此，IE开发团队决定只将布局应用于实际需要它的那些元素，这样就可以充分地减少性能开销。
具体什么是haslayout请看这篇文章 ： http://www.cnblogs.com/yuqingfamily/p/6866285.html
## Doctype作用？标准模式与兼容模式各有什么区别?
- <!DOCTYPE>告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
- 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。
## HTML5 为什么只需要写 <!DOCTYPE HTML>？
- HTML5不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
- 而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。
## html5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
** 新特性：**
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

- (1)绘画 canvas;
- (2)用于媒介回放的 video 和 audio 元素;
- (3)本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
- (4)sessionStorage 的数据在浏览器关闭后自动删除;
- (5)语意化更好的内容元素，比如 article、footer、header、nav、section;
- (6)表单控件，calendar、date、time、email、url、search;
- (7)新的技术webworker, websocket, Geolocation;

如何处理浏览器兼容问题？

> IE8/IE7/IE6支持通过document.createElement方法产生的标签，
> 可以利用这一特性让这些浏览器支持HTML5新标签，
> 浏览器支持新标签后，还需要添加标签默认的样式。
> 当然也可以直接使用成熟的框架、比如html5shim;
> <!--[if lt IE 9]>
> <script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
> <![endif]-->

如何区分 HTML 和 HTML5？

> 文档声明，语意结构，H5新标签的使用

## 简述一下你对HTML语义化的理解？
- 用正确的标签做正确的事情。
- html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## 请描述一下 cookies，sessionStorage 和 localStorage 的区别？
- cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
- cookie数据始终在同源的http请求中携带（即使不需要），也会在浏览器和服务器间来回传递。
- sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

存储大小：

- cookie数据大小不能超过4k。
- sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

有期时间：

- localStorage  存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
- sessionStorage  数据在当前浏览器窗口关闭后自动删除。
- cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## iframe有那些缺点？
- iframe会阻塞主页面的Onload事件；
- 搜索引擎的检索程序无法解读这种页面，不利于SEO;
- iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
- 使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以绕开以上两个问题。

## 如何实现浏览器内多个标签页之间的通信?
WebSocket、SharedWorker
也可以调用localstorge、cookies等本地存储方式。
localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信。

注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常。
## 如何在页面上实现一个圆形的可点击区域？
-（1）map+area或者svg
-（2）border-radius
-（3）纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

## 



