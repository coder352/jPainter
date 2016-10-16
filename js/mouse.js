// 方法2
// Firefox支持属性pageX,与pageY属性，这两个属性已经把页面滚动计算在内了,
// 在Chrome可以通过document.body.scrollLeft，document.body.scrollTop计算出页面滚动位移，
// 而在IE下可以通过document.documentElement.scrollLeft ，document.documentElement.scrollTop
function getMousePos(event) {  // 这里还有待完善
  // var e = event || window.event;
  // var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  // var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  // var x = e.pageX || e.clientX + scrollX;
  // var y = e.pageY || e.clientY + scrollY;
  var offset = $("#canvas-frame").offset();  // 上边那些没有考虑到 div 的 offset
  var e = event || window.event;
  var x = e.pageX - offset.left;  // The MouseEvent.pageX read-only property returns the horizontal coordinate of the event relative to the whole document.
  var y = e.pageY - offset.top;
  // pageX is an integer value in pixels for the X coordinate of the mouse pointer, relative to the whole document,
  // when the mouse event fired. This property takes into account any horizontal scrolling of the page.
  // 详细介绍见: jTemplate/web/javascript/JavaScript获取DOM元素位置和尺寸大小
  // console.log('x: ' + x + '\ny: ' + y);
  //================================================================
  // 这里是将坐标系进行转化, 转化为 WebGL 坐标系
  //================================================================
  var div = document.getElementById('canvas-frame');
  var clientWidth = div.clientWidth;
  var clientHeight = div.clientHeight;

  return {'x': x - clientWidth / 2, 'y': - y + clientHeight / 2};
}
function test_getMousePos(object, e){
  var x = getMousePos(e).x;
  var y = getMousePos(e).y;
  console.log('x: ' + x + '\ny: ' + y);
}
// $("#canvas-frame").click(test_getMousePos)  // 添加鼠标点击监控事件
document.getElementById("canvas-frame").addEventListener("click", test_getMousePos);  // 和上面那句话的效果相同
