function curry(...arg) {
    let s = (...arg1) => arg1.length >= arg.length ? curry(...arg1) : (...args) => s(...arg1, ...args);
    return s;
}

function curry(...arg) {
    let s = function(...arg1) {
        arg1.length >= arg.length ? curry(...arg1) : function(...args) {
            s(...arg1, ...args);
        }
    }
    return s;
}