---
title: 面试题-CSS专题
copyright: true
date: 2018-08-30 23:46:32
categories: 面试题
tags:
    - 面试题
    - CSS专题
---
## 清除浮动有哪些方式？比较好的方式是哪一种？
- 父级div定义height。
- 结尾处加空div标签clear:both。
- 父级div定义伪类:after和zoom。
- 父级div定义overflow:hidden。
- 父级div定义overflow:auto。
- 父级div也浮动，需要定义宽度。
- 父级div定义display:table。
- 结尾处加br标签clear:both。

比较好的是第3种方式，好多网站都这么用。
## box-sizing常用的属性有哪些？分别有什么作用？
- box-sizing: content-box|border-box|inherit;
- content-box:宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。

** border-box:**元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
## 页面导入样式时，使用link和@import有什么区别？
- link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
- 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
## 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
-（1）有两种， IE 盒子模型、W3C 盒子模型。
-（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)。
-（3）区  别： IE的content部分把 border 和 padding计算了进去。
## CSS优先级算法如何计算？
- 优先级就近原则，同权重情况下样式定义最近者为准;
- 载入样式以最后载入的定位为准;

优先级为:

- !important >  id > class > tag
- important比内联优先级高(style)

## 为什么要使用CSS sprites
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background-position”的组合进行背景定位，这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是如果请求太多会给服务器增加很大的压力。

<!-- more -->
## display:none和visibility:hidden的区别？
- display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。
- visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。
## position的absolute与fixed区别
- absolute浮动定位是相对于父级中设置position为relative或者absolute最近的父级元素
- fixed浮动定位是相对于浏览器视窗的
## IE 8以下版本的浏览器中的盒模型有什么不同？
IE8以下浏览器的盒模型中定义的元素的宽高包括内边距和边框（怪异盒子模型）


