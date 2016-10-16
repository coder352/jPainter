//////////////////////////////////////////////////////////////////
// 参考自: WebGL 20中文网/Threejs基础教程/4、第2章%20还记得点、线、面吗(一）.mhtml
// 在Three.js中，要渲染物体到网页中，我们需要3个组建：场景（scene）、相机（camera）和渲染器（renderer）
// 有了这三样东西，才能将物体渲染到网页中去
// 场景是一个物体的容器，开发者可以将需要的角色放入场景中，例如苹果，葡萄。同时，角色自身也管理着其在场景中的位置。
// 相机的作用就是面对场景，在场景中取一个合适的景，把它拍下来。
// 渲染器的作用就是将相机拍摄下来的图片，放到浏览器中去显示。
//////////////////////////////////////////////////////////////////

// 渲染器决定了渲染的结果应该画在页面的什么元素上面，并且以怎样的方式来绘制
var renderer;  // 渲染器
function initThree() {
  width = document.getElementById('canvas-frame').clientWidth;
  height = document.getElementById('canvas-frame').clientHeight;
  renderer = new THREE.WebGLRenderer({
    antialias : true
  });
  renderer.setSize(width, height);
  document.getElementById('canvas-frame').appendChild(renderer.domElement);
  // 渲染器renderer的domElement元素，表示渲染器中的画布，所有的渲染都是画在domElement上的，所以这里的appendChild表示将这个domElement挂接在body下面
  renderer.setClearColor(0xFFFFFF, 1.0);
}

var camera;
function initCamera() {
  camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, -1000, 1000);  // 正射相机
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 1000;  // 这三行表示相机在 z 轴上, 也就符合我们平时的二维坐标系了
  camera.up.x = 0;
  camera.up.y = 1;
  camera.up.z = 0;  // 这三行表示相机的顶端是向 y 轴的正方向, 符合我们平时的习惯, y 轴向上, x 轴向右
  camera.lookAt({
    x : 0,
    y : 0,
    z : 0
  });  // 相机的镜头指向原点, 默认
}

// 在Threejs中场景就只有一种，用THREE.Scene来表示，要构件一个场景也很简单，只要new一个对象就可以了
// 场景是所有物体的容器，如果要显示一个苹果，就需要将苹果对象加入场景中
var scene;  // 场景
function initScene() {
  scene = new THREE.Scene();
}

//////////////////////////////////////////////////////////////////
// 添加光线
//////////////////////////////////////////////////////////////////
var light;
function initLight() {
  light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
  light.position.set(100, 100, 200);
  scene.add(light);
}

//////////////////////////////////////////////////////////////////
// 添加物体到场景
//////////////////////////////////////////////////////////////////
var cube;
function initObject() {

  var geometry = new THREE.Geometry();  // 添加一个几何体, 几何体里面有一个vertices变量，可以用来存放点。
  var material = new THREE.LineBasicMaterial({vertexColors: true});  // 材质, 线
  // 定义一种线条的材质，使用THREE.LineBasicMaterial类型来定义，它接受一个集合作为参数，其原型如下： LineBasicMaterial( parameters )
  // Parameters是一个定义材质外观的对象，它包含多个属性来定义材质，这些属性是：
  // Color：线条的颜色，用16进制来表示，默认的颜色是白色。
  // Linewidth：线条的宽度，默认时候1个单位宽度。
  // Linecap：线条两端的外观，默认是圆角端点，当线条较粗的时候才看得出效果，如果线条很细，那么你几乎看不出效果了。
  // Linejoin：两个线条的连接点处的外观，默认是“round”，表示圆角。
  // VertexColors：定义线条材质是否使用顶点颜色，这是一个boolean值。意思是，线条各部分的颜色会根据顶点的颜色来进行插值。（如果关于插值不是很明白，可以QQ问我，QQ在前言中你一定能够找到，嘿嘿，虽然没有明确写出）。
  // Fog：定义材质的颜色是否受全局雾效的影响。
  var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color(0xFF0000);

  // 线的材质可以由2点的颜色决定, 先放两个点, 后放两种颜色来赋给两个点
  var p1 = new THREE.Vector3(-100, 100, 0);
  var p2 = new THREE.Vector3(100, -100, 0);
  geometry.vertices.push(p1);
  geometry.vertices.push(p2);  // 这里是将颜色赋值给了上面的两个点
  geometry.colors.push(color1, color2);  // 中间的颜色自动插值

  var line = new THREE.Line(geometry, material, THREE.LinePieces);
  // 定义线条，使用THREE.Line类，代码如下所示: var line = new THREE.Line( geometry, material, THREE.LinePieces );
  // 第一个参数是几何体geometry，里面包含了2个顶点和顶点的颜色。第二个参数是线条的材质，或者是线条的属性，表示线条以哪种方式取色。
  // 第三个参数是一组点的连接方式，我们会在后面详细讲解。

  scene.add(line);
}

//////////////////////////////////////////////////////////////////
// 实时渲染
//////////////////////////////////////////////////////////////////
function render() {
  renderer.clear();
  // cube.rotation.x += 0.1;
  // cube.rotation.y += 0.1;
  renderer.render(scene, camera);  // 渲染器开始渲染
  requestAnimationFrame(render);
  // requestAnimationFrame() 这个函数就是让浏览器去执行一次参数中的函数，这样通过上面render中调用requestAnimationFrame()函数
  // requestAnimationFrame()函数又让rander()再执行一次，就形成了我们通常所说的游戏循环了
  // test(this, event);
  //console.log('hello');
}

//////////////////////////////////////////////////////////////////
// 主函数
//////////////////////////////////////////////////////////////////
function threeStart() {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  // renderer.clear();
  // renderer.render(scene, camera);  // 渲染器开始渲染
  render();  // 如果不需要实时渲染, 可以将上面两句话取注释, 并将这句话注释掉
}
