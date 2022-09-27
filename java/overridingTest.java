package inheritanceTest;

/*
 *		덮어쓰다
 *		상속받은 조상의 메서드를 자신에 맞게 변경하는것
 *
 *		x,y위치값을 문자열로 반환하는 메서드 getLocation이 있다면
 *		상속받아서 x,y,z 까지 추가가능
 *
 *
 *
 *		오버라이딩 규칙3
 *		1. 선언부 일치 (조상 자식)
 *		2. 접근제어자를 조상클래스의 메서드보다 좁은 범위로 변경할 수 없다.
 *		3. 예외는 조상클래스의 메서드보다 많이 선언할 수 없다. ex) throws IOException, SOLException 조상이 두개면 자식은 그보다 적어야함
 * 
 */

class Point {
	int x;
	int y;
	
	Point(int x, int y){	// 생성자
		this.x = x;
		this.y = y;
	}
	
	public String toString() { // 오버라이딩 선언부를 조상과 똑같이 해줘야함 ex) public 그대로
		return "x:" + x + ", y:" + y;
	}
}




public class overridingTest {
	public static void main(String [] args) {
		
		Point p = new Point(3,5);
		//p.x =3;
		//.y =5;
		System.out.println(p);
		//System.out.println(p.toString());
	}
}
