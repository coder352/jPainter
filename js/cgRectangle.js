class cgRectangle extends cgObject{
  constructor(){
    super();

    // 矩形的左上端点和右下端点
    this.m_point1;
    this.m_point2;
    this.m_fWidth = 1.0;  // 线宽
    this.m_tempPoint;  // 临时变量，存贮鼠标点击位置值
    this.m_bFirstPoint = false;  // 是否是第一个点
  }
  //void cgRectangle::Darw()
  Draw(){
    //float x0,y0,x1,y1;
    ////绘制矩形
    //x0 = m_point1.m_fX;
    //x1 = m_point2.m_fX;
    //y0 = m_point1.m_fY;
    //y1 = m_point2.m_fY;
    //glLineWidth(m_fWidth);
    //glColor3f(m_fR,m_fG,m_fB);
    //glBegin(GL_LINE_LOOP);
    //glVertex2f(x0,y0);
    //glVertex2f(x1,y0);
    //glVertex2f(x1,y1);
    //glVertex2f(x0,y1);
    //glEnd();
  }

  //BOOL cgRectangle::HitTest(float x, float y)
  HitTest(){
    //if((x-m_point1.m_fX)*(x-m_point2.m_fX)<=0 &&
      //(y-m_point1.m_fY)*(y-m_point2.m_fY)<=0)
      //return true;
    //return false;
  }

  //void cgRectangle::OnLButtonDown(UINT nFlags, CPoint point)
  OnLButtonDown(){
    //if (m_eStatus == Inputing)
    //{
      //if (!m_bFirstPoint) //第一个点
      //{
        //m_bFirstPoint = true;
        //m_point2.m_fX = m_point1.m_fX = point.x;
        //m_point2.m_fY = m_point1.m_fY = point.y;
      //}
      //else//第二个点
      //{
        //m_point2.m_fX = point.x;
        //m_point2.m_fY = point.y;

        //m_bFirstPoint = false;//点选取完毕
        //m_eStatus = InputingEnd;//输入结束
      //}
    //}
  }

  //void cgRectangle::OnMouseMove(UINT nFlags, CPoint point)
  OnMouseMove(){
    //if (m_bFirstPoint && m_eStatus == Inputing)//第2次按键
    //{
      //m_point2.m_fX = point.x;
      //m_point2.m_fY = point.y;
    //}

    //if (nFlags == MK_LBUTTON  && m_eStatus == Selected)//移动图形
    //{
      //m_eStatus = Moving;
      //m_tempPoint = point;
    //}
    //if (nFlags == MK_LBUTTON  && m_eStatus == Moving)//移动图形
    //{
      //int dx = point.x -  m_tempPoint.x;
      //int dy = point.y -  m_tempPoint.y;

      //m_point1.m_fX += dx; m_point1.m_fY -= dy;
      //m_point2.m_fX += dx; m_point2.m_fY -= dy;

      //m_tempPoint = point;
    //}
  }

  //void cgRectangle::CalBox()
  CalBox(){

  }
}
