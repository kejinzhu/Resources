function debounce(fn, interval = 300) {
    let timeout = null;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, interval);
    };
}