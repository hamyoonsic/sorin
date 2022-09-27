package inheritanceTest;
class MyPoint {
	int x;
	int y;
}

class Circle extends MyPoint{
	
	int r;
}


//초기화를 꼭 해줘야 메모리에 공간이 할당된다 ..저장공간이 생긴다
// ex) MyPoint p = new MyPoint();
// 혹은 생성자

public class InheritanceTest {
	public static void main(String [] args) {
		
		Circle c = new Circle();
		c.x =1;
		c.y =2;
		c.r =3;
		
		
	}
}
