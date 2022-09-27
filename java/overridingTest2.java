package inheritanceTest;


/*
 *		덮어쓰다
 *		상속받은 조상의 메서드를 자신에 맞게 변경하는것
 *
 *		x,y위치값을 문자열로 반환하는 메서드 getLocation이 있다면
 *		상속받아서 x,y,z 까지 추가가능
 * 
 */

class Point1 {
	int x;
	int y;
	
	String getLocation() {
		return "x:" + x + ", y:" + y;
	}
}

class Point3D extends Point1 {
	int z;
	
	//조상의 getLocation overriding
	
	String getLocation() {
		return "x:" + x + ", y:" + y + ", z:" + z;
	}
}



public class overridingTest2 {
	public static void main(String [] args) {
		
		Point3D p = new Point3D();
		p.x =3;
		p.y =5;
		p.z=7;
		System.out.println(p.getLocation());
		
	}
}
