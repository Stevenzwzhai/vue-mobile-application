(function(){
    var deviceWidth = document.documentElement.clientWidth;

    if (deviceWidth > 750) {
        deviceWidth = 750;
    }

    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';

    // 页面宽度发生变化时动态生成根字体尺寸
    window.onresize = function () {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) deviceWidth = 750; // Iphone6Plus的屏幕尺寸
        document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
    }
})()