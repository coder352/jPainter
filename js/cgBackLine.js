class cgBackLine extends cgObject{
  constructor(){
    super();
    // 注意:子类必须在constructor方法中调用super方法，否则新建实例时会报错。
    // 临时变量, 存储鼠标点击的位置
    this.m_tempPoint;
    this.mycars = new Array()  // 存放点的集合
    this.m_first = false;  // 是不是第一个点
    this.m_count = 0;  // 记录点的个数

    // 存储上一个点 和 最后一个点的信息
    this.m_lastx;
    this.m_lasty;
    this.m_firstx;
    this.m_firsty;

    this.max_x;
    this.max_y;
    this.min_x;
    this.min_y;
  }
  Draw(){
    //int i=0;
    //glLineWidth(1.0f);
    //glColor3f(m_fR,m_fG,m_fB);
    //glBegin(GL_LINES);
    //for(i=0;i<m_count-1;i++)
    //{
    //glVertex2f(m_points[i].m_fX,m_points[i].m_fY);
    //glVertex2f(m_points[i+1].m_fX,m_points[i+1].m_fY);
    //}
    //glEnd();
    ////处理最后一条线
    //if(m_eStatus == Inputing)
    //{
    //glColor3f(0,1,0);
    //glBegin(GL_LINES);
    //glVertex2f(m_points[m_count-1].m_fX,m_points[m_count-1].m_fY);
    //glVertex2f(m_lastx,m_lasty);
    //glEnd();
    //}
    //else
    //{
    //glColor3f(1,1,1);
    //glBegin(GL_LINES);
    //glVertex2f(m_points[m_count-1].m_fX,m_points[m_count-1].m_fY);
    //glEnd();
    //}
    ////画矩形
    //max_x=m_points[0].m_fX,max_y=m_points[0].m_fY;
    //min_x=m_points[0].m_fX,min_y=m_points[0].m_fY;
    //for(i=0;i<m_count;i++)
    //{
    //if(m_points[i].m_fX>max_x)
    //max_x=m_points[i].m_fX;
    //if(m_points[i].m_fX<min_x)
    //min_x=m_points[i].m_fX;
    //}
    //for(i=0;i<m_count;i++)
    //{
    //if(m_points[i].m_fY>max_y)
    //max_y=m_points[i].m_fY;
    //if(m_points[i].m_fY<min_y)
    //min_y=m_points[i].m_fY;
    //}

    //if (m_eStatus == Selected || m_eStatus == Moving)
    //{
    ////绘制矩形
    //glColor3f(0,1,0);
    //glBegin(GL_LINE_LOOP);
    //glVertex2f(max_x,max_y);
    //glVertex2f(min_x,max_y);
    //glVertex2f(min_x,min_y);
    //glVertex2f(max_x,min_y);
    //glEnd();
    //}
  }

  OnLButtonDown(){
    //if(m_eStatus == Inputing)
    //{
      //if(!m_first)
      //{
        //m_points[m_count++]=cgPoint(point.x,point.y);
        //m_firstx=point.x;
        //m_firsty=point.y;
        //m_first=true;return ;
      //}
      //else
      //{
        //m_points[m_count++]=cgPoint(point.x,point.y);
        //m_lastx=point.x;
        //m_lasty=point.y;
      //}
    //}
  }

  OnMouseMove(){
    //if(m_eStatus == Inputing)//当还是输入状态的时候
    //{
      //if (m_first)
      //{
        //m_lastx = point.x, m_lasty = point.y;
      //}
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
      //for(int i=0;i<m_count;i++)
      //{
        //m_points[i].m_fX += dx;
        //m_points[i].m_fY -= dy;
      //}

      //m_tempPoint = point;
    //}
  }

  HitTest(){
    //if(x<=max_x&&x>=min_x&&y<=max_y&&y>=min_y)
      //return true;
    //return false;
  }

  OnRButtonDown(){
    //m_eStatus = InputingEnd;
    //m_points[m_count++]=cgPoint(point.x,point.y);
    //m_points[m_count++]=cgPoint(m_firstx,m_firsty);
  }

}
