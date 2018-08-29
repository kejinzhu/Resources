//-----------第一题by小柯
setTimeout(function() {
    console.log('start'); //第二步,打印'start'
    new Promise(function(resolve, reject) {
        resolve(true); //执行then中的resolve方法
        reject(false); //状态凝固了不执行
        console.log(1); //prmise类是同步的,第三步打印1
    }).then(function() {
        setTimeout('var x=2;console.log(2);'); //放入宏任务中
        console.log(a); //a未定义会报错,then中返回的promise实例，执行reject方法
    }, function() {
        setTimeout('var x=3;console.log(3)');
        console.log(b);
    }).then(function() {
        console.log(4);
    }, function() {
        console.log(5); //a报错之后执行，第四步打印5
    }).catch(function() {
        console.log(6);
    })
}, 0)
setTimeout(function() {
    const timer = setInterval(function() {
        console.log(7); //放入宏任务中
    }, 10)
    const start = Date.now();
    setTimeout(function() { //放入宏任务中
        while (Date.now() - start <= 30) {}
        clearTimeout(timer);
        try {
            console.log(x);
        } catch (e) {
            console.log(8);
        }
    }, 13)
}, 0)
console.log('end'); //第一步,打印'end'

/*
* 题解：
* 1、首先两个定时器都放入宏任务中，先执行主任务中的代码，打印'end'
* 2、此时主任务队列任务执行完成去执行第一个宏任务,先执行同步代码，打印'start'
* 3、随之执行promise类中的代码,打印'1',执行resolve,由于这个时候状态改变了，所以不会执行reject方法，跳过
* 4、执行resolve之后，执行第一个then中的第一个回调函数，遇到setTimeout放入宏任务中,在打印a的时候由于a未定义会报错，
* 5、在第四步中a报错之后，触发reject方法，执行第二个then中第二个回调函数捕获错误,打印'5',由于then中存在第二个回调函数，因此 不会走catch，如果传递下来then没有第二个回调，才会走catch方法
* 6、第一个宏任务走完之后，走第二个宏任务，遇到两个定时器，也都放入宏任务中，现在我们一共剩下三个宏任务(第四步一个和这里两个),我们来看着三个宏任务是怎么执行的。
* 7、setTimeout('var x=2;console.log(2);');分在浏览器环境还是node环境中,首先setTimeout是可以传字符串的，但是不推荐。
在浏览器环境下解析该字符串，相当于eval函数，解析完成之后，其变量会暴露在当前作用域中，由于回调中的作用域是全局(this指向window),因此x=2暴露在全局作用域下，会打印2,
如果在node环境中，这段字符串是不会解析的，直接跳过这行代码，继续执行下面的宏任务
* 8、再执行setInterval打印7,
* 9、剩下最后一个宏任务,首先这里用到了一个知识点,用while阻塞了主线程,如果是在浏览器环境下，由于第七步将x=2暴露在了全局下，所以这里不会报错,将2打印出来。如果是在node环境中，由于setTimeout('var x=2;console.log(2);')这行代码不走，打印x就会报错，catch捕获异常后打印出8

最后总结：输出结果是浏览器：'end'、'start'、1、5、2、7、2
node环境：'end'、'start'、1、5、7、8
知识点：如果有两个宏任务，一个宏任务先执行的话，先执行完第一个宏任务中的微任务，再去执行宏任务。
while可以阻塞主线程：通过时间戳来控制阻塞时间。
*/


//-------------------第二题by文斌
+

function() {
    alert(a); //a{2}
    a(); //2
    var a = function() {
        console.log(1);
    }

    function a() {
        console.log(2);
    }
    alert(a); //a{1}
    a(); //1
    var c = d = a;
}()
alert(d);
alert(c);

/*
 * 题解:外面是一个自执行函数，进入之后先进行变量提升，函数的提升会提升到顶部，然后再是变量a的提升
 * 1、函数是声明+定义;变量只声明不定义,函数提升之后，变量a不会再声明;第一句alert(a),是打印函数体function(){console.log(2)}
 * 2、a()执行时，打印2
 * 3、执行到第二个alert之后，a已经被重新赋值了，覆盖掉之前的函数体，这个时候弹出的是函数体function(){console.log(1)}
 * 4、执行a(),打印1
 * 5、var c = d = a;执行这句的时候，c是带var的,b没有带var,b给全局增加属性，c是私有变量
 * 6、在外面打印的时候d弹出函数体a、c会报错
 */


//----------------------------第三题by广森
function Foo() {
    getName = function() { console.log(1); };
    return this;
}
Foo.getName = function() { console.log(2); };
Foo.prototype.getName = function() { console.log(3); };
var getName = function() { console.log(4); };

function getName() { console.log(5); }

//请写出以下输出结果：
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2
new Foo().getName(); //3
new new Foo().getName(); //3
//题解：Foo.getName()执行的是Foo上的私有方法  打印的是2
//getName()执行的是window下的，这个时候getName是var getName = function() { console.log(4); };  打印的是4
//Foo().getName();当Foo执行之后，window下的getName被修改为getName = function() { console.log(1); };  打印的是1
//getName();再执行的时候，window下的getName还是getName = function() { console.log(1); };   打印的是1
//new Foo.getName();点的优先级高，先是访问Foo私有属性上的getName再new   打印的是2
//new Foo().getName();这个时候先new Foo()所以是Foo的实例去调用，原型上的getName方法   打印的是3
//new new Foo().getName();先执行new Foo()实例去调用原型上的getName方法，再new    打印的是3

//--------------第四题by姚祥
function teacher(name, age) {
    this.name = name;
    this.age = age;
}
teacher.prototype.sayName = function() {
    console.log('name' + this.name);
}
teacher.prototype.sayAge = function() {
    console.log('age' + this.age);
}

function student() {
    var args = arguments;
    teacher.call(this, args[0], args[1])
}
student.prototype = new teacher();
var student1 = new student('zhufeng', 8);
student1.sayName(); //'name' + zhufeng
student1.sayAge(); //'age' + 8
//题解：student.prototype = new teacher()这个时候student的原型称为了teacher的实例，就可以通过student.prototype.__proto__找到teacher原型上的sayName和sayAge方法
//student1是student的实例，通过__proto__找到student的原型，student的原型再通过__proto__去找到teacher原型上的sayName和sayAge方法

//------------------------------第五题by国涛
let arr = ["五", "二", "六", "一", "四", "三"];
//方法1：
var obj = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6
}
arr.sort(function(a, b) {
    return obj[a] - obj[b];
})
console.log(arr);
//方法2:
arr = arr.reduce(function(prev, next, index) {
    prev.push(obj[next]);
    prev = prev.sort(function(a, b) { return a - b; });
    if (index === 5) {
        prev = prev.map(function(item) {
            for (let key of Object.keys(obj)) {
                if (obj[key] === item) {
                    return key;
                }
            }
        })
    }
    return prev;
}, []);
console.log(arr);