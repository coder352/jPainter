class cgTriangle extends cgObject {
  constructor(){
    super();
    this.flag;
    // 三角形的三个点
    this.m_point3;
    this.m_point2;
    this.m_point1;

    this.m_bFirstPoint;  // 是否是第一个点
    this.m_bSecondPoint;  // 是否是第二个点
    this.m_tempPoint;  // 临时变量，存贮鼠标点击位置值
    this.m_size;  // 宽度
  }
}
