var cgEntityStatus = Object.freeze({"Drawing": 1, "Inputing": 2, "InputingEnd":3, "Selected": 4, "Moving":5}); // freeze 使数据不能修改和删除, 类似于 Enum
// console.log(jEntityStatus.Drawing)

class cgObject{
  constructor() {  // 将变量定义到这里
    // super(length, length);  // 在这里调用父类的"length",赋值给矩形的"width"和"height"。
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。

    // 当前的状态
    this.m_eStatus = cgEntityStatus.Drawing;

    // 包围盒
    // this.m_fLeft = 0.0;
    this.m_fLeft = 0.0;
    this.m_fButtom = 0.0;
    this.m_fRight = 0.0;
    this.m_fTop = 0.0;

    // 点的颜色
    this.m_fR = 1.0;
    this.m_fG = 1.0;
    this.m_fB = 1.0;
  }
  SetStatus(status){  // 获取当前的状态
    this.m_eStatus = status;
  }
  GetStatus(){
    return this.m_eStatus;
  }
  SetColor(r, g, b){
    this.m_fR = r;
    this.m_fG = g;
    this.m_fB = b;
  }

}

var test = new cgObject();
//console.log(test.m_fRight);
//console.log(test.GetStatus());
//test.SetColor(2.0, 3, 4);
console.log(test.m_fR);

