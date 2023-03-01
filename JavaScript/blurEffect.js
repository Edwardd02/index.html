// 获取下拉菜单和body元素
var dropdowns = document.getElementsByClassName("dropdown");
var body = document.body;

// 给每个下拉菜单添加鼠标移入事件处理函数
for (var i = 0; i < dropdowns.length; i++) {
  dropdowns[i].addEventListener("mouseenter", function() {
    // 将body元素添加毛玻璃效果
    body.classList.add('blur-background');
    // 将当前下拉菜单的直接父元素添加高斯模糊效果
  });

  // 给每个下拉菜单添加鼠标移出事件处理函数
  dropdowns[i].addEventListener("mouseleave", function() {
    // 将body元素的毛玻璃效果移除
    body.classList.remove('blur-background');
    // 将当前下拉菜单的直接父元素的高斯模糊效果移除
  });
}