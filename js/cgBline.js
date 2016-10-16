class cgBline extends cgObject{  // 贝塞尔曲线
  constructor(){

    super();  // 这里必须执行一遍
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    this.count = 0;  // 记录点的个数
    this.m_tempPoint;  // 临时变量，存贮鼠标点击位置值
    this.m_points = new Array();  // 三次B曲线
  }
  HitTest(){
    return false;
  }
  Draw(){
    //drawDot(m_points[0]);
    //drawDot(m_points[1]);
    //drawDot(m_points[2]);
    //drawDot(m_points[3]);
    //glColor3f(1.0, 1.0, 0.0);
    //drawLine(m_points[0], m_points[1]);
    //drawLine(m_points[1], m_points[2]);
    //drawLine(m_points[2], m_points[3]);
    //glColor3f(0.0, 1.0, 1.0);
    //cgPoint POld = m_points[0];
    //for (float t = 0.0; t<=1.0;t+=0.1f)
    //{
      //cgPoint P = drawBezier(m_points[0], m_points[1], m_points[2],  m_points[3], t);
      //drawLine(POld, P);
      //POld = P;
    //}
    //glColor3f(1.0, 0.0, 0.0);
  }
  drawDot(){
    //glBegin(GL_POINTS);
    //glVertex2f(pt.m_fX, pt.m_fY);
    //glEnd();
  }
  drawLine(){
    //glBegin(GL_LINES);
    //glVertex2f(p1.m_fX, p1.m_fY);
    //glVertex2f(p2.m_fX, p2.m_fY);
    //glEnd();
  }
  drawBezier(){
    //cgPoint P;
    //float a1 = pow((1-t),3);
    //float a2 = pow((1-t),2)*3*t;
    //float a3 = 3*t*t*(1-t);
    //float a4 = t*t*t;

    //P.m_fX = a1*A.m_fX+a2*B.m_fX+a3*C.m_fX+a4*D.m_fX;
    //P.m_fY = a1*A.m_fY+a2*B.m_fY+a3*C.m_fY+a4*D.m_fY;
    //return P;
  }
}
var test = new cgBline();
