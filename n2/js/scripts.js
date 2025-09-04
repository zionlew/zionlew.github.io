// 按钮1点击事件
document.getElementById('btn1').addEventListener('click', function () {
    alert('按钮1被点击了！');
    console.log('按钮1被点击');
});

// 按钮2点击事件
document.getElementById('btn2').addEventListener('click', function () {
    alert('按钮2被点击了！');
    console.log('按钮2被点击');
});

// 页面加载完成时执行
document.addEventListener('DOMContentLoaded', function () {
    console.log('页面加载完成');
});