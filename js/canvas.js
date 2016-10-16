/**
 *
 */

var x,y,endX,endY;  // x 表示鼠标按下的起始位置, endX 表示鼠标移动过程中的位置(类似于橡皮筋, 最后表示的就是鼠标抬起时的坐标)

//undo redo
var history =new Array();
var cStep = -1;

// simulate line rectangle input dialog when you interact with the UI
var lineTip = $("#container").appendLine({width:"1px",type:"solid",color:"red",beginX:0,beginY:0,endX:1,endY:1});
var rectTip = $(" <div style='border:1px solid gray;opacity:0.1;width:1px;height:1px;position:absolute;display:none;'></div>");
var fontTip =$("<textarea rows='3' cols='20' style='background:transparent;position:absolute;display:none;'></textarea>");
// $("#container").append(lineTip);  // 在定义变量的时候已经append了
$("#container").append(rectTip);
$("#container").append(fontTip);
// 这里设置的是在往 canvas 上画的时候，会根据不同的功能来不同的提示


var flag = false;  // flag 表示的是在 mouseMove 的过程中, mouseDown 时是 True, 否则是 False, 用来控制是否画图
var ctx=document.getElementById("myCanvas").getContext("2d");
/**
 * Every function in this app has a corresponding command code:
 * --------------------------------------------------
 * function     command code    description
 * --------------------------------------------------
 * brash(pencil)      1       use it as a pencil to draw
 * eraser         2       use it as a eraser to erase some spots
 * trash          3         you can clean the whole canvas
 * draw line        4       draws straight lines
 * draw rectangle     5       draw rectangles
 * draw words       6       you can input words on the canvas
 *
 */


// Every function has different canvas context and cursor style
// therefore, we create a callback list to .....
// 1. switch the canvas context
// 2. switch the cursor style when the mouse is on the canvas
var command = 1;
var commandCallbacks = $.Callbacks();  // 回调函数, 参数是函数本身
commandCallbacks.add(switchCanvasContext);
commandCallbacks.add(switchCursorStyle);  // add 添加函数到 callback list 中

// By default,
$("#tools_pencil").trigger("click");  // 默认执行参数中的事件
commandCallbacks.fire(command);  // callbacks.fire(arguments) 让所有add上来的函数执行这个参数

initUI();



// command emitter
$("[name='toolsOption']").change(function(){
  // Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
  var val = $(this).val();
  var type = $(this).attr("id");
  if("on" == val)
  {
    switch(type)
    {
      case "tools_pencil"   :{command=1;break;}
      case "tools_eraser"   :{command=2;break;}
      case "tools_trash"    :{command=3;break;}
      case "tools_line"     :{command=4;break;}
      case "tools_rectangle"  :{command=5;break;}
      case "tools_font"   :{command=6;break;}
      default         :{command=1;};
    }
    //initialize canvas context and cursor style
    commandCallbacks.fire(command);  // 让所有的回调函数再执行一次
  }
});

$("#container").mousemove(mouseMoveEventHandler);  // cantainer 是包含 canvas 的 div
// Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
// The mousemove event is sent to an element when the mouse pointer moves inside the element.

/**
 * In different function circumstances, the Mouse Move Event should be handled in different behalf.
 */
    function mouseMoveEventHandler(e)  // 这里是鼠标移动的响应事件, 下面还有鼠标按下响应事件, 但鼠标移动的响应事件中包含了鼠标按下的 flag
    {
      switch(command)  // 默认是 1
      {
        case 1  : { drawPencil(e);break; }
        case 2  : { drawPencil(e);break; }
        case 4  : { fakeLineInput(e); break; }
        case 5  : { fakeRectangleInput(e);break; }
        case 6  : { fakeWordsInput(e);break; }
      }
    }


/**
 * When you want to input some words on the canvas, the Input User Interface should be offered.
 * you can drag a line on the canvas while  mouse button is pressed down
 */
    function fakeWordsInput(e)
    {
      var offset = $("#myCanvas").offset();
      endX = e.pageX-offset.left;
      endY = e.pageY-offset.top;  // 这里只是记录了鼠标的停止的位置
      if(flag)  // 如果按着鼠标
      {
        fontTip.show();
        fontTip.css({left:x,top:y});
        fontTip.width(endX-x);
        fontTip.height(endY-y);
      }
    }


    function fakeRectangleInput(e)
    {
      var offset = $("#myCanvas").offset();
      endX = e.pageX - offset.left;
      endY = e.pageY - offset.top;
      var borderWidth = $("#penWidth").val();  // penWidth 是上面那个宽度的选择框
      if(flag)  // 鼠标按着的时候
      {
        rectTip.css({left:x,top:y});
        rectTip.width(endX-x-borderWidth*2);
        rectTip.height(endY-y-borderWidth*2);
        console.log(flag);
      }
    }


/**
 * 画线
 */
    function fakeLineInput(e)
    {
      var offset = $("#myCanvas").offset();
      endX = e.pageX-offset.left;
      endY = e.pageY-offset.top;
      if(flag)
      {
        lineTip.adjustLine({
          beginX:x,  // x 是鼠标刚按下的位置
          beginY:y,
          endX:endX,
          endY:endY,
          parent:$("#myCanvas")
        })
      }
    }


//draw free line
    function drawPencil(e){

//if the mouse button is pressed down,draw the mouse moving trace.
      if(flag)  // 鼠标按下的时候
      {
        var offset = $("#myCanvas").offset();
        var x = e.pageX-offset.left;
        var y = e.pageY-offset.top;
        $("#show").html(x + ", " + y+"  "+e.which);
        ctx.lineTo(x,y);
        ctx.stroke();
      }
      else  // if the mouse button is not pressed down, set the beginPath for myCanvas
      {
// set the begin path for brash
ctx.beginPath();  // every time when mouse is moving, ctx will get a new beginPath
var offset = $("#myCanvas").offset();
var x = e.pageX-offset.left;
var y = e.pageY-offset.top;
ctx.moveTo(x,y);
      }
    }



      /**
       * clear canvas
       */
      function clearCanvas()
      {
        ctx.fillStyle="#FFFFFF";
        var width  = $("#myCanvas").attr("width");
        var height  = $("#myCanvas").attr("height");
        ctx.fillRect(0,0,width,height);
      }


      $("#container").mousedown(function(e){

        // set mousedown flag for mousemove event
        flag = true;
        // set the begin path of the brash
        var offset = $("#myCanvas").offset();
        x = e.pageX-offset.left;
        y = e.pageY-offset.top;
        console.log("begin:"+x+" "+y);

        switch(command)
        {
          case 1  : { break; }  // when choose Pencil, nothing
          case 2  : { break; }  // when choose Eraser, nothing
          case 4  : {   lineTip.show(); break; }
          case 5  : {
            var borderColor = "#"+ $("#colorpicker-popup").val();
            var borderWidth  = $("#penWidth").val()+"px";
            var sr = borderColor +" "+borderWidth+ " solid";
            var backgroundColor ="#"+$("#colorpicker-popup2").val();
            rectTip.css({
              "border": sr,
              "background-color":backgroundColor,
              "color": backgroundColor
            });
            rectTip.show();
            break;
          }
          case 6  : {   break;    }
        }
      });

      $("#container").mouseup(function(e){

        flag=false;

        // records operations history for undo or redo
        historyPush();  // 在这里 push 进历史,

        switch(command)
        {
          case 1  : { break; }
          case 2  : { break; }
          case 4  :   {   drawline();break;}
          case 5  : {   drawRectangle();break;}
          case 6  : {   fontTip.focus();break;}
        }
      });


      fontTip.blur(drawWords);
      // The blur event is sent to an element when it loses focus.
      $("#tools_undo").click(undo);  // 将前端和这里的函数进行绑定
      $("#tools_redo").click(redo);



      /**
       * function: draw straight line
       */
      function drawline(){
        ctx.beginPath();
        var offset = $("#myCanvas").offset();
        ctx.moveTo(x,y);
        ctx.lineTo(endX,endY);
        ctx.stroke();
        lineTip.hide();  // 画一条, 隐藏一条, 最有 mouseup 的时候才最终画出来
      }


      /**
       * function : draw  rectangle
       */
      function drawRectangle(){  // 一直在画, 一直在隐藏, 最后才最终画出来
        var borderWidth  = $("#penWidth").val();
        ctx.fillRect(x+borderWidth,y+borderWidth,endX-x,endY-y);
        ctx.strokeRect(x,y,endX-x,endY-y);
        $("#myCanvas").focus();
        rectTip.hide();
      }

      /**
       * function:  Draw Words
       */
      function drawWords(e){
        var words = fontTip.val().trim();
        if( fontTip.css("display")!= "none" && words )
        {
          ctx.strokeStyle ="#"+ $("#colorpicker-popup").val();
          ctx.fillStyle ="#"+$("#colorpicker-popup2").val();
          var offset = $("#myCanvas").offset();
          var offset2 = fontTip.offset();
          var fontSize = $("#fontSize").val();
          fontSize =fontSize.substring(0,fontSize.length-2);
          ctx.fillText(words,offset2.left-offset.left,(offset2.top-offset.top+fontSize*1));

          fontTip.val("");
        }
        fontTip.hide();
      }

      /**
       * function: undo
       */
      function undo()
      {
        if (cStep >= 0)
        {
          clearCanvas();
          cStep--;
          var tempImage = new Image();
          tempImage.src = history[cStep];
          tempImage.onload = function () { ctx.drawImage(tempImage, 0, 0);};
        }

      }


      /**
       * function:  redo
       */
      function redo()
      {
        if (cStep <history.length-1)
        {
          clearCanvas();
          cStep++;
          var tempImage = new Image();
          tempImage.src = history[cStep];
          tempImage.onload = function () { ctx.drawImage(tempImage, 0, 0); };
        }
      }


      //// define function
      function initUI()
      {
        //界面UI初始化，对话框, 外边那层比较好看的灰色 和 上边那个橙色的顶栏
        $( "#dialog" ).dialog(
          {
            autoOpen: true,
            show: {
              effect: "blind",
              duration: 920
            },
            hide: {
              effect: "explode",
              duration: 920
            },
            height:650,
            width:990
          });

        //2. canvas 被拖动，重新设置画板大小（因为拖动是css效果，而实际画板大小是width 和height属性）
        $("#myCanvas").resizable({
          stop:function(event,ui){
            var height =  $("#myCanvas").height();
            var width =$("#myCanvas").width();
            $("#myCanvas").attr("width",width);
            $("#myCanvas").attr("height",height);
            //画板大小改变，画笔也会被初始化，这里将画笔复原
            switchCanvasContext();
          },
          grid: [ 20, 10 ]
        });

        //3. 工具条, 各种工具条美化, 外面围上一圈圆角矩形, 带上图标
        $("#tools_pencil").button({
          icons:{  // 设置前面的图标
            primary:"ui-icon-pencil"
          }
        });

        $("#tools_eraser").button({
          icons:{
            primary:"ui-icon-bullet"
          }
        });
        $("#tools_trash").button({
          icons:{
            primary:"ui-icon-trash"
          }
        });

        $("#tools_save").button({
          icons:{
            primary:"ui-icon-disk"
          }
        });


        $("#tools_undo").button({
          icons:{
            primary:"ui-icon-arrowreturnthick-1-w"
          }
        });

        $("#tools_redo").button({
          icons:{
            primary:"ui-icon-arrowreturnthick-1-e"
          }
        });
        $("#tools_line").button({
          icons:{
            primary:"ui-icon-minusthick"
          }
        });
        $("#tools_rectangle").button({
          icons:{
            primary:"ui-icon-stop"
          }
        });
        $("#tools_font").button({
          icons:{
            primary:"ui-icon-radio-off"
          }
        });
        $("#boldOption").button();  // 加粗和倾斜没有设置图标
        $("#italicOption").button();

        //4. 画笔粗细设置
        $("#penWidth").selectmenu({  // 默认设置成 menu 的样式
          width:70,
          select:penWidthEventListener  // 添加监听事件
        });

        function penWidthEventListener(event,ui){

          //1. update brash width
          var lineWidth = ui.item.value;
          ctx.lineWidth =lineWidth;

          //2. update LineTip Width
          lineTip.css("border-top-width",lineWidth+"px");

          //3.update RectTip width
          rectTip.css("border-width",lineWidth+"px");
          return false;
        }



        $("#fontSize").selectmenu({
          width:100,
          select:function(event,ui){
            setFont();
          }
        });



        $("#fontType").selectmenu({
          width:100,
          select:function(event,ui){
            setFont();
            return false;
          }
        });

        setFont();

        //5. 颜色选择器
        $("#colorpicker-popup").colorpicker({
          buttonColorize: true,
          alpha:          true,
          draggable:       true,
          showOn:         'both',
          close:borderColorEventListener
        });

        function borderColorEventListener(e)
        {
          // 1. set brash context
          var color= "#"+$(this).val();
          ctx.strokeStyle =color;

          // 2. set tips info
          lineTip.css({"border-color":color});
          rectTip.css({"border-color":color});
          //fontTip.css({"border-color":color});
        }


        //5. Fill Color Picker
        $("#colorpicker-popup2").colorpicker({
          buttonColorize: true,
          alpha:          true,
          draggable:       true,
          showOn:         'both',
          close:fillColorEventListener
        });

        function fillColorEventListener(e)
        {
          var color= "#"+$(this).val();
          ctx.fillStyle =color;
          rectTip.css({"background-color":color});
          fontTip.css({"color":color});
        }

      }

      $("#italicOption").click(setFont);
      $("#boldOption").click(setFont);

      // 设置字体
      function setFont(){
        var size = $("#fontSize").val();
        var type = $("#fontType").val();
        var color = "#" +$("#colorpicker-popup2").val();

        var fontWeight = $("#boldOption").get(0).checked;
        fontWeight = fontWeight ? "bold" : " ";

        var fontItalic =$("#italicOption").get(0).checked;
        fontItalic = fontItalic ? " italic " : " ";
        ctx.font = fontItalic+ fontWeight+" " +size+" "+type;
        fontTip.css({"font-size":size,"font-family":type,color:color,"font-style":fontItalic,"font-weight":fontWeight});
      }

      $("#tools_save").click(saveItAsImage);

      /**
       * save canvas content as image
       */
      function saveItAsImage()
      {
        var image = $("#myCanvas").get(0).toDataURL("image/png").replace("image/png", "image/octet-stream");
        //locally save
        window.location.href=image;
      }



      /**
       * put current canvas to cache
       */
      function historyPush()
      {
        cStep++;
        if (cStep < history.length)
        {
          history.length = cStep;
        }
        //history.push($("#myCanvas").get(0).toDataURL());
      }


      /**
       * switch the canvas context for different command
       */
      function switchCanvasContext(command)
      {
        ctx.lineWidth = $("#penWidth").val();
        ctx.strokeStyle ="#"+ $("#colorpicker-popup").val();
        ctx.lineCap = "round";
        ctx.fillStyle ="#"+$("#colorpicker-popup2").val();

        if(command)
        {
          switch(command){
            case 1: {  // when choose the Pencil
              break;
            }
            case 2: {  // when choose the Eraser
              ctx.strokeStyle ="#FFFFFF";  // 点击 eraser 时, 前段设置成白色
              break;
            }
            case 3:{  // when choose the Empty
              clearCanvas();
              $("#tools_pencil").trigger("click");
              $("#tools_pencil").focus();
            }
          }
        }
        return ctx;
      }



      /**
       *  switch cursor style for different command
       */
      function switchCursorStyle(command)
      {
        switch(command){
          case 1: {  // 默认 canvas 上激活的是 pencil
            $("#myCanvas").removeClass("container_eraser");
            $("#myCanvas").removeClass("container_font");
            $("#myCanvas").addClass("container_pencil");
            break;
          }
          case 2: {
            $("#myCanvas").removeClass("container_pencil");
            $("#myCanvas").removeClass("container_font");
            $("#myCanvas").addClass("container_eraser");
            break;
          }
          case 6: {
            $("#myCanvas").removeClass("container_eraser");
            $("#myCanvas").removeClass("container_pencil");
            $("#myCanvas").addClass("container_font");
            break;
          }
          default:{
            $("#myCanvas").removeClass("container_eraser");
            $("#myCanvas").removeClass("container_font");
            $("#myCanvas").addClass("container_pencil");
            break;
          }
        }

      }

