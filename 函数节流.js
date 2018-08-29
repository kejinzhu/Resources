function throttle(fn, interval) {
    let flag = true;
    return function(...arg) {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(null, arg);
            flag = true;
        }, interval);
    }
}