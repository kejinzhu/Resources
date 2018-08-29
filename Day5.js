//请实现方法 parse ，作用如下：
var object = {
    b: { c: 4 },
    d: [{ e: 5 }, { e: 6 }]
};
console.log(parse(object, 'b.c') == 4) //true 
console.log(parse(object, 'd[0].e') == 5) //true
console.log(parse(object, 'd.0.e') == 5) //true
console.log(parse(object, 'd[1].e') == 6) //true
console.log(parse(object, 'd.1.e') == 6) //true
console.log(parse(object, 'f') == 'undefined') //true
function parse(obj, str) {
    var arr = str.split(""); //将字符串分割，放进数组中
    arr = arr.map(function(item, index) {
            if (!isNaN(item)) {
                //判断是否是数字
                if (arr[index - 1] != '[' && arr[index + 1] != ']') {
                    //如果前后没有,则返回[item]
                    return "[" + item + "]";
                } else {
                    //如果不是上述情况，则直接返回该项
                    return item;
                }
            } else {
                //如果不是数字的情况下,.后面是数字,则需要去掉前面的.
                if (item === "." && !isNaN(arr[index + 1])) {
                    return "";
                }
                return item;
            }
        })
        //将数组join方法变成字符串赋值给str
    str = arr.join("");
    //将结果返回
    return eval('obj.' + str) || 'undefined';
}

//题解：
/*
 * 1、首先，我们拿到题的时候，应该分析题目的目的。首先是一个object对象，然后通过parse传参的形式，将对象object和字符串作为参数传进去。返回值是获取object对象属性值，属性值存在的时候返回属性值，不存在的时候返回undefined。
 * 2、获取属性值有两种方式：object[属性名]或者object.属性名，但是属性名是数字的时候只能采用第一种方式。所以我们要对这种情况进行讨论。
 * 3、下面我们要讨论的就是数字这种情况的，分析数字前后有没有[]，如果有，那么我们不需要做什么，直接返回，如果数字前后没有[],那么我们是需要手动给数字前后加上[],并且把前面的'.'去掉。
 * 4、分析好上述情况之后，我们代码实现：首先传入obj,str
 * 4.1、我们将str.split("")，放入数组中，然后采用数组的map方法进行遍历，分两种情况，是数字，和不是数字
 * 4.2、是数字中，又分为数字前后有没有[],没有就添加上再返回，有就直接返回
 * 4.3、不是数字的话，如果是'.',则需要判断'.'后面是否是数字，如果是数字，就返回空字符串
 * 4.4、将map映射后的数组重新赋值给arr，最后用arr.join("")拼接之后转字符串再赋值给str
 * 4.5、最后我们需要运算之后，将属性值返回来，字符串的运算，我们采用eval来运算。
 */