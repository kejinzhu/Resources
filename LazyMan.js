//实现一个LazyMan,可以按照以下方式调用
//1)LazyMan('Hank')输出:
//Hi！This is Hank!
//2)LazyMan('Hank').sleep(10).eat('dinner')输出
//Hi！This is Hank!
//等待10秒
//Wake up after 10
//Eat dinner~
//3)LazyMan('Hank').eat('dinner').eat('suppper');输出
//Hi！This is Hank!
//Eat dinner~
//Eat supper~
//4)LazyMan('Hank').sleepFirst(5).eat('supper')输出
//等待5秒
//Wake up after 5
//Hi This is Hank!
//Eat supper

//----------------jQuery思想
(function(window, undefined) {
    const LazyMan = function(name) {
        return new LazyMan.fn.init(name);
    }
    LazyMan.fn = LazyMan.prototype = {
        constructor: LazyMan,
        sleep: function(time) {
            setTimeout(() => {
                let curTime = Date.now();
                while (Date.now() - curTime <= time * 1000) {};
                console.log(`Wake up after ${time}`);
            }, 0);
            return this;
        },
        sleepFirst: function(time) {
            let curTime = Date.now();
            while (Date.now() - curTime <= time * 1000) {};
            console.log(`Wake up after ${time}`);
            return this;
        },
        eat: function(name) {
            setTimeout(() => {
                console.log(`Eat ${name}~`);
            }, 0);
            return this;
        }
    }
    init = LazyMan.fn.init = function(name) {
        setTimeout(() => {
            console.log(`Hi! This is ${name}!`);
        }, 0);
    };
    init.prototype = LazyMan.fn;
})(window, undefined)
//-----------------------发布订阅思想
(function(window, undefined) {
    class _LazyMan {
        constructor(name) {
            this.queueList = [];
            let _man = function() {
                console.log(`Hi! This is ${name}!`);
            }
            this.add(_man);
            //发布
            setTimeout(() => {
                this.fire(this.queueList);
            }, 0);
        };
        //订阅
        add(fn) {
            if (typeof fn === "function") {
                if (this.flag) {
                    this.queueList.unshift(fn);
                } else {
                    this.queueList.push(fn);
                }
            }
        };
        //发布
        fire() {
            let queueList = this.queueList;
            for (let i = 0; i < queueList.length; i++) {
                let cur = queueList[i];
                cur && cur();
            }
        };
        eat(name) {
            let _eat = function() {
                console.log(`Eat ${name} ~`);
            }
            this.flag = false;
            this.add(_eat);
            return this;
        };
        sleep(time) {
            let _sleep = function() {
                let curTime = Date.now();
                while (Date.now() - curTime <= time * 1000) {};
                console.log(`Wake up after ${time}!`);
            }
            this.flag = false;
            this.add(_sleep);
            return this;
        };
        sleepFirst(time) {
            let _sleepFirst = function() {
                let curTime = Date.now();
                while (Date.now() - curTime <= time * 1000) {};
                console.log(`Wake up after ${time}!`);
            }
            this.flag = true;
            this.add(_sleepFirst);
            return this;
        };
    }

    function LazyMan(name) {
        return new _LazyMan(name);
    }
})(window, undefined)

//----------------------Promise思想
(function(window, undefined) {
    class _LazyMan {
        constructor(name) {
            //定义一个promise队列
            this.promiseQueue = [];
            let promiseList = function() {
                let promise = new Promise(function(resolve, reject) {
                    console.log(`Hi! This is ${name}!`);
                    resolve();
                })
                return promise;
            }
            this.promiseQueue.push(promiseList);
            let queueResolve = Promise.resolve();
            let _this = this;
            setTimeout(() => {
                for (let i = 0; i < this.promiseQueue.length; i++) {
                    let curPromiseQueue = this.promiseQueue[i];
                    let thenFn = (function() {
                        return function() {
                            return curPromiseQueue();
                        }
                    })(curPromiseQueue)
                    queueResolve.then(thenFn);
                }
            }, 0);
        }
        eat(name) {
            let promiseList = function() {
                let promise = new Promise(function(resolve, reject) {
                    console.log(`Eat ${name} ~`);
                    resolve();
                })
                return promise;
            }
            this.promiseQueue.push(promiseList);
            return this
        };
        sleep(time) {
            let promiseList = function() {
                let promise = new Promise(function(resolve, reject) {
                    let curTime = Date.now();
                    while (Date.now() - curTime <= time * 1000) {};
                    console.log(`Wake up after ${time}!`);
                    resolve();
                })
                return promise;
            }
            this.promiseQueue.push(promiseList);
            return this
        };
        sleepFirst(time) {
            let promiseList = function() {
                let promise = new Promise(function(resolve, reject) {
                    let curTime = Date.now();
                    while (Date.now() - curTime <= time * 1000) {};
                    console.log(`Wake up after ${time}!`);
                    resolve();
                })
                return promise;
            }
            this.promiseQueue.unshift(promiseList);
            return this
        };
    }

    function LazyMan(name) {
        return new _LazyMan(name);
    }
})(window, undefined)