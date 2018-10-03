export function loadMore(element, callback) {
    let timer;
    element.addEventListener('scroll', () => {
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            let clientHeight = element.clientHeight;//窗口高度
            let scrollTop = element.scrollTop;//向上卷去的高度
            let scrollHeight = element.scrollHeight;//内容的高度
            if (clientHeight + scrollTop + 10 >= scrollHeight) {
                callback();
            }
        }, 200);
    });
}

export function downRefresh(element, callback) {
    let startY, distance = 0, originTop = element.offsetTop;//存放开始按下的Y坐标的位置 originTop=56
    element.addEventListener('touchstart', function (event) {
        startY = event.touches[0].pageY;//记录一下初始的位置
        if (element.offsetTop == originTop && element.scrollTop == 0) {
            element.addEventListener('touchmove', touchMove);
            element.addEventListener('touchend', touchEnd);
        }

        function touchMove(event) {
            let pageY = event.touches[0].pageY;
            if (pageY > startY) {//如果新的Y大于初始的Y，那么就是下拉
                distance = pageY - startY;
                element.style.top = originTop + distance + 'px';
            } else {
                element.removeEventListener('touchmove', touchMove);
                element.removeEventListener('touchend', touchEnd);
            }
        }
        function touchEnd(event) {
            element.removeEventListener('touchmove', touchMove);
            element.removeEventListener('touchend', touchEnd);
            //把top值恢复到原始的状态
            let timer = setInterval(() => {
                element.style.top = originTop + (--distance) + 'px';
                if (distance < 1) {
                    element.style.top = originTop + 'px';
                    clearInterval(timer);
                }
            }, 13);
            if (distance > 30) {
                callback();
            }
        }

    });
}