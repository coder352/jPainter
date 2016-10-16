class cgLine extends cgObject{
  constructor(){
    super();
    // 线段的两个端点
    this.m_ptP1;
    this.m_ptP2;

    if(arguments.length == 2){
      this.m_ptP1 = arguments[0];
      this.m_ptP2 = arguments[1];
    }

    this.m_tempPoint;  // 临时变量，存贮鼠标点击位置值
    this.m_bFirstPoint = false;  // 是否是第一个点
    this.m_fWidth = 1.0;  // 线宽
  }
//void cgLine::Darw()
  Draw(){
    //glLineWidth(m_fWidth);
    //glColor3f(m_fR,m_fG,m_fB);
    //glBegin(GL_LINES);
    //glVertex2f(m_ptP1.m_fX,m_ptP1.m_fY);
    ////glVertex2f(m_ptP1.m_fX,m_ptP1.m_fY);
    //glVertex2f(m_ptP2.m_fX,m_ptP2.m_fY);
    //glEnd();

    //if (m_eStatus == Selected || m_eStatus == Moving)
    //{
      //float x0,y0,x1,y1;

      ////计算外围矩形
      //x0 = m_ptP1.m_fX;x1 = m_ptP2.m_fX;
      //if (x0 > m_ptP2.m_fX)
      //{
        //x0 = m_ptP2.m_fX; x1 = m_ptP1.m_fX;
      //}
      //y0 = m_ptP1.m_fY;y1 = m_ptP2.m_fY;
      //if (y0 > m_ptP2.m_fY)
      //{
        //y0 = m_ptP2.m_fY; y1 = m_ptP1.m_fY;
      //}
      //if(m_ptP1.m_fX == m_ptP2.m_fX)
      //{
        //x0 = m_ptP1.m_fX - 2;
        //x1 = m_ptP1.m_fX + 2;
      //}
      //else if(m_ptP1.m_fY == m_ptP2.m_fY)
      //{
        //y0 = m_ptP1.m_fY - 2;
        //y1 = m_ptP1.m_fY + 2;
      //}

      ////绘制矩形
      //glColor3f(0,1,0);
      //glBegin(GL_LINE_LOOP);
      //glVertex2f(x0,y0);
      //glVertex2f(x1,y0);
      //glVertex2f(x1,y1);
      //glVertex2f(x0,y1);
      //glEnd();
    //}
  }
//void cgLine::OnLButtonDown(UINT nFlags, CPoint point)
  OnLButtonDown(){
    //if (m_eStatus == Inputing)
    //{
      //if (!m_bFirstPoint) //第一个点
      //{
        //m_bFirstPoint = true;
        //m_ptP2.m_fX = m_ptP1.m_fX = point.x;
        //m_ptP2.m_fY = m_ptP1.m_fY = point.y;
      //}
      //else//第二个点
      //{
        //m_ptP2.m_fX = point.x;
        //m_ptP2.m_fY = point.y;

        //m_bFirstPoint = false;//点选取完毕
        //m_eStatus = InputingEnd;//输入结束
      //}
    //}
  }
//void cgLine::OnMouseMove(UINT nFlags, CPoint point)
  OnMouseMove(){
    //if (m_bFirstPoint && m_eStatus == Inputing)//第2次按键
    //{
      //m_ptP2.m_fX = point.x;
      //m_ptP2.m_fY = point.y;
    //}

    //if (nFlags == MK_LBUTTON  && m_eStatus == Selected)//移动图形
    //{
      //[>int dx = point.x -  m_tempPoint.x;
    //int dy = point.y -  m_tempPoint.y;

    //m_ptP1.m_fX += dx; m_ptP1.m_fY -= dy;
    //m_ptP2.m_fX += dx; m_ptP2.m_fY -= dy;*/

      //m_eStatus = Moving;
      //m_tempPoint = point;
    //}
    //if (nFlags == MK_LBUTTON  && m_eStatus == Moving)//移动图形
    //{
      //int dx = point.x -  m_tempPoint.x;
      //int dy = point.y -  m_tempPoint.y;

      //m_ptP1.m_fX += dx; m_ptP1.m_fY -= dy;
      //m_ptP2.m_fX += dx; m_ptP2.m_fY -= dy;

      //m_tempPoint = point;
    //}
  }

//BOOL cgLine::IntersectLine(cgPoint p1, cgPoint p2, cgPoint& p)
  IntersectLine(){
    //float delta = (m_ptP2.m_fX - m_ptP1.m_fX) * (-(p2.m_fY -  p1.m_fY)) - (m_ptP2.m_fY - m_ptP1.m_fY) * (-(p2.m_fX -  p1.m_fX));

    //if (fabs(delta) < 0.01f) //平行
    //{
      //return FALSE;//需要进一步考虑重合情况
    //}
    //else
    //{
      //float t = ((p1.m_fX - m_ptP1.m_fX) * (-(p2.m_fY -  p1.m_fY)) - (p1.m_fY - m_ptP1.m_fY) * (-(p2.m_fX -  p1.m_fX))) / delta;

      //float s = ((m_ptP2.m_fX - m_ptP1.m_fX) * (p1.m_fY -  m_ptP1.m_fY) + (m_ptP2.m_fY - m_ptP1.m_fY) * (m_ptP1.m_fX -  p1.m_fX)) / delta;

      //if (t>= -0.01f && t<=1.01f && s >= -0.01f && s<=1.01f)
      //{
        //p.m_fX = m_ptP1.m_fX + (m_ptP2.m_fX -  m_ptP1.m_fX) * t;
        //p.m_fY = m_ptP1.m_fY + (m_ptP2.m_fY -  m_ptP1.m_fY) * t;

        //return TRUE;
      //}
    //}

    //return FALSE;
  }

//BOOL cgLine::HitTest(float x, float y)
  HitTest(){
    //float d = 2.0f;//左右上下2个像素内，必须大于等于1

    //cgPoint p1,p2,p;

    ////形成矩形的4条边，分别计算是否相交
    //p1.m_fX = x-d;  p2.m_fX = x+d;
    //p1.m_fY = p2.m_fY = y - d;
    //if (IntersectLine(p1, p2, p)) return TRUE;

    //p1.m_fY = p2.m_fY = y + d;
    //if (IntersectLine(p1, p2, p)) return TRUE;

    //p1.m_fY = y-d;  p2.m_fY = y+d;
    //p1.m_fX = p2.m_fX = x - d;
    //if (IntersectLine(p1, p2, p)) return TRUE;

    //p1.m_fX = p2.m_fX = x + d;
    //if (IntersectLine(p1, p2, p)) return TRUE;

    //return FALSE;
  }

  CalBox(){

  }
  //OnRButtonDown(UINT nFlags, CPoint point){

  //}
}
