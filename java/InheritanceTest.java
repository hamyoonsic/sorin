package inheritanceTest;
class MyPoint {
	int x;
	int y;
}

class Circle extends MyPoint{
	
	int r;
}


//�ʱ�ȭ�� �� ����� �޸𸮿� ������ �Ҵ�ȴ� ..��������� �����
// ex) MyPoint p = new MyPoint();
// Ȥ�� ������

public class InheritanceTest {
	public static void main(String [] args) {
		
		Circle c = new Circle();
		c.x =1;
		c.y =2;
		c.r =3;
		
		
	}
}
