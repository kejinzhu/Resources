---
title: ES基础知识与高频考点梳理
copyright: true
date: 2018-08-31 17:10:56
categories: 面试题
tags:
    - 面试题
    - ES基础知识与高频考点梳理
---
# 知识点梳理目录列表
- 变量类型
  - JS的数据类型分类和判断
  - 值类型和引用类型
- 原型与原型链(继承)
  - 原型和原型链的定义
  - 继承写法
- 作用域和闭包
  - 执行上下文
  - this
  - 闭包是什么
- 异步
  - 同步VS异步
  - 异步和单线程
  - 前端异步的场景
- ES6/7新标准的考查
  - 箭头函数
  - module
  - class
  - set和map
  - promise
## 变量类型
JavaScript是一种弱类型脚本语言，所谓弱类型指的是定义变量时，不需要什么类型，在程序运行过程中会自动判断类型
### ECMAScript中定义了6种原始类型
- boolean
- string
- number
- undefined
- null
- symbol

### 题目：类型判断用到哪些方法？

#### typeof
`typeof xxx`得到的值有一下类型：`undefined、boolean、number、string、object、function、symbol`

- `typeof null`结果是`object`，实际这是`typeof`的一个`bug`，`null`是原始值，非引用类型
- `typeoof [1,2]`结果是`object`，结果中没有这一项，引用类型除了`function`其他的全部都是object
- `typeof Symbol()`用`typeof`获取`symbol`类型的值得到的是`symbol`，这是`ES6`新增的知识点

#### instanceof
用于实例和构造函数的对应。例如判断一个变量是否是数组，使用`typeof`无法判断,但可以使用[1,2] instanceof Array来判断。因为,`[1,2]`是数组,它的构造函数就是Array：同理

```javascript
function Foo(name) {
    this.name = name
}
var foo = new Foo('bar')
console.log(foo instanceof Foo) // true
```
#### constructor
#### object.prototype.toString.call()
### 题目：值类型和引用类型的区别
#### 值类型VS引用类型
除了原始类型，ES还有引用类型，上文提到的typeof识别出来的类型中,只有object和function是引用类型，其他都是值类型

根据JavaScript中的变量类型传递方式，又分为`值类型`和`引用类型`
值类型包括：`Boolean、string、number、undefined、null`;
引用类型包括：object类的所有，如Date、Array、function等。
在参数传递方式上，值类型是按值传递，引用类型是按地址传递

```javascript
// 值类型
var a = 10
var b = a
b = 20
console.log(a)  // 10
console.log(b)  // 20
```
上述代码中，a b都是值类型，两者分别修改赋值，相互之间没有任何影响。再看引用类型的例子：

```javascript
// 引用类型
var a = {x: 10, y: 20}
var b = a
b.x = 100
b.y = 200
console.log(a)  // {x: 100, y: 200}
console.log(b)  // {x: 100, y: 200}...
```
上述代码中，a b都是引用类型。在执行了b = a之后，修改b的属性值，a的也跟着变化。因为a和b都是引用类型，指向了同一个内存地址，即两者引用的是同一个值，因此b修改属性时，a的值随之改动。
再借助题目进一步讲解一下。
#### 题目：说出下面代码的执行结果，并分析其原因。

```javascript
function foo(a){
    a = a * 10;
}
function bar(b){
    b.value = 'new';
}
var a = 1;
var b = {value: 'old'};
foo(a);
bar(b);
console.log(a); // 1
console.log(b); // value: new...
```
通过代码执行，会发现：
- a的值没有发生改变
- b的值发生了改变
这就是因为`Number`类型的`a`是按值传递的，而`Object`类型的`b`是按地址传递的。

** JS 中这种设计的原因是：**按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。按共享传递的类型，是复制其引用，而不是整个复制其值（C 语言中的指针），保证过大的对象等不会因为不停复制内容而造成内存的浪费。...

引用类型经常会在代码中按照下面的写法使用，或者说容易不知不觉中造成错误！

```javascript
var obj = {
    a: 1,
    b: [1,2,3]
}
var a = obj.a
var b = obj.b
a = 2
b.push(4)
console.log(obj, a, b)
```

虽然obj本身是个引用类型的变量（对象），但是内部的a和b一个是值类型一个是引用类型，a的赋值不会改变obj.a，但是b的操作却会反映到obj对象上。
## 原型和原型链
JavaScript 是基于原型的语言，原型理解起来非常简单，但却特别重要，下面还是通过题目来理解下JavaScript 的原型概念。
### 题目：如何理解JavaScript的原型
对于这个问题，可以从下面这几个要点来理解和回答，下面几条必须记住并且理解
- 1.每一个函数数据类型（函数、类）都天生自带一个prototype属性，prototype的属性值是一个对象数据类型的；
- 2. prototype 属性中天生自带一个constructor属性，属性值是当前原型所属的类；
- 3.每一个对象数据类型值（对象、数组、arguments...）天生自带一个__proto__属性，属性值指向当前实例所属类的原型；
- 4.所有的函数数据类型（普通函数、类（内置的、自定义））都是Function的一个实例；Function是所有函数的基类；
- 5.所有的对象数据类型（实例、prototype、对象）都是Object的一个实例；Object是所有对象数据类型的基类；

```javascript
// 要点一：自由扩展属性
var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn () {}
fn.a = 100;
// 要点二：__proto__
console.log(obj.__proto__);
console.log(arr.__proto__);
console.log(fn.__proto__);
// 要点三：函数有 prototype
console.log(fn.prototype)
// 要点四：引用类型的 __proto__ 属性值指向它的构造函数的 prototype 属性值
console.log(obj.__proto__ === Object.prototype)...
```
#### 原型
```javascript
// 构造函数
function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}
// 创建示例
var f = new Foo('zhangsan')
f.printName = function () {
    console.log(this.name)
}
// 测试
f.printName()
f.alertName()...
```
执行printName时很好理解，但是执行alertName时发生了什么？这里再记住一个重点 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找，因此f.alertName就会找到Foo.prototype.alertName。...

那么如何判断这个属性是不是对象本身的属性呢？使用hasOwnProperty，常用的地方是遍历一个对象的时候。

```javascript
var item
for (item in f) {
    // 高级浏览器已经在 for in 中屏蔽了来自原型的属性，但是这里建议大家还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
        console.log(item)
    }
}...
```
### 题目：如何理解JS的原型链
#### 原型链
还是接着上面的示例，如果执行f.toString()时，又发生了什么？

```javascript
// 测试
f.printName()
f.alertName()
f.toString()
```
因为`f`本身没有`toString()`，并且`f.__proto__`（即`Foo.prototype`）中也没有`toString`。这个问题还是得拿出刚才那句话——当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的`__proto__`（即它的构造函数的`prototype`）中寻找。

如果在`f.__proto__`中没有找到`toString`，那么就继续去`f.__proto__.__proto__`中寻找，因为`f.__proto__`就是一个普通的对象而已嘛！...

- `f.__proto__`即`Foo.prototype`，没有找到`toString`，继续往上找
- `f.__proto__.__proto__`即`Foo.prototype.__proto__`。`Foo.prototype`就是一个普通的对象，因此`Foo.prototype.__proto__`就是`Object.prototype`，在这里可以找到`toString...`
- 因此`f.toString`最终对应到了`Object.prototype.toString`

这样一直往上找，你会发现是一个链式的结构，所以叫做“原型链”。如果一直找到最上层都没有找到，那么就宣告失败，返回undefined。最上层是什么 —— `Object.prototype.__proto__ === null`
#### 原型中的this
所有从原型或更高级原型中得到、执行的方法，其中的`this`在执行时，就指向了当前这个触发事件执行的对象。因此`printName`和`alertName`中的`this`都是`f`。

