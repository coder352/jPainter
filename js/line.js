//================================================================
// 这里开始画线
//================================================================
var mat = new THREE.LineBasicMaterial({color: 0xff0000});
var geo = new THREE.Geometry();
var jline;
var j_firstPoint = 0;
function j_drawLine(object, e){
  var ansx = getMousePos(e).x;
  var ansy = getMousePos(e).y;
  geo.vertices.push(
    new THREE.Vector3(ansx, ansy, 0)
  );
  if(j_firstPoint == 1){
    jline = new THREE.Line(geo, mat);
    scene.add(jline);
    //jline.geometry.vertices[0].x -= 100;
    //geo = new THREE.Geometry();
    j_firstPoint = 0;
    //console.log(jline.geometry.vertices[0].x);
  } else {
    j_firstPoint = 1;
  }
}
$("#canvas-frame").click(j_drawLine)  // 添加鼠标点击监控事件
$("#canvas-frame").mousemove(j_moveLine);

//================================================================
// 这里开始移动线, 写到这里的移动的就写不下去了
//================================================================
function j_moveLine(object, e) {
  event.preventDefault();
  if(jline == null) return;  // 如果为空, 返回
  var ansx = getMousePos(e).x;
  var ansy = getMousePos(e).y;
  var mv = new THREE.Vector3(ansx, ansy, 0);
  scene.remove(jline);
  jline.geometry.vertices[0].copy(mv);
  jline.geometry.vertices[0].x -= 1;
  console.log(jline.geometry.vertices[0].x);
  geo.vertices.push(new THREE.Vector3(ansx, ansy, 0));
  geo.vertices.push(new THREE.Vector3(ansx + 100, ansy + 100, 0));
  //jline = new THREE.Line(jline.geometry, mat);
  var line = new THREE.Line(geo, mat);
  scene.add(line);
}
