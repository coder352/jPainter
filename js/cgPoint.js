class cgPoint extends cgObject{
  constructor(){
    super();
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 点的坐标
    this.m_fX = 0.0;
    this.m_fY = 0.0;
    if (arguments.length == 2) {
      this.m_fX = arguments[0];
      this.m_fY = arguments[1];
    }
    // 临时变量, 存储鼠标点击位置值
    this.m_tempPoint;
    // 点的大小
    this.m_fSize = 5.0;
    this.m_eStatus = Drawing;
  }
  // 设置点的大小
  SetPointSize(size){
    this.m_fSize = size;
  }
  // 画点
  Draw(){
    // 这里画点的函数还没写
    //glPointSize(m_fSize);
    //glColor3f(m_fR,m_fG,m_fB);
    //glBegin(GL_POINTS);
    //glVertex2f(m_fX,m_fY);
    //glEnd();

  }
  OnMouseMove(){

  }
  OnLButtonDown(){

  }
  HitTest(){
    //float d = m_fSize + 1.0f;
    //float dx = (float)fabs(x - m_fX);
    //float dy = (float)fabs(y - m_fY);
    //if (dx<=d && dy<=d) return TRUE;
    //return FALSE;

  }
}
