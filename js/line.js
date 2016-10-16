//================================================================
// 这里开始画线
//================================================================
var mat = new THREE.LineBasicMaterial({color: 0xff0000});
var geo = new THREE.Geometry();
var line;
var j_firstPoint = 0;
function j_drawLine(object, e){
  var ansx = getMousePos(e).x;
  var ansy = getMousePos(e).y;
  geo.vertices.push(
    new THREE.Vector3(ansx, ansy, 0)
  );
  if(j_firstPoint == 1){
    line = new THREE.Line(geo, mat);
    scene.add(line);
    //line.geometry.vertices[0].x -= 100;
    geo = new THREE.Geometry();
    j_firstPoint = 0;
    //console.log(line.geometry.vertices[0].x);
  } else {
    j_firstPoint = 1;
  }
}
$("#canvas-frame").click(j_drawLine)  // 添加鼠标点击监控事件
$("#canvas-frame").mousemove(j_moveLine);

//================================================================
// 这里开始移动线
//================================================================
function j_moveLine(object, e) {
  event.preventDefault();
  if(line == null) return;  // 如果为空, 返回
  var ansx = getMousePos(e).x;
  var ansy = getMousePos(e).y;
  var mv = new THREE.Vector3(ansx, ansy, 0);
  scene.remove(line);
  line.geometry.vertices[0].copy(mv);
  //line.geometry.vertices[0].x -= 1;
  console.log(line.geometry.vertices[0].x);
  scene.add(line);
}
