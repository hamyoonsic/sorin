package superTest;


/*	super()	
 * 		
 *	super()는 this , super랑 상관없는 생성자임
 *	조상 생성자 호출용
 *	
 *	++생성자, 초기화블럭은 상속 x
 *
 *
 *	첫줄에 생성자 호출이 없을 경우   ***생성자의 첫줄은 항상 생성자호출********
 *	컴파일러가 super(); 를 자동으로 삽입
 *
 *	때문에 클래스생성시 기본생성자가 꼭 필요한 것
 *
 *	
 *	point의 super = object
 *	point3d의 super = point
 *
 */


class Point { 
	int x,y;
	
	Point (int x, int y){
		this.x = x;	// ***생성자의 첫줄은 항상 생성자호출*** 이경우 생성자호출 없기에 컴파일러가 super(); 추가 super(); = object();
		this.y = y;
	}
}


class Point3D extends Point {
	int z ;
	
	Point3D (int x, int y, int z){
		super(x,y);			// 조상의 생성자를 호출			//  ***생성자의 첫줄은 항상 생성자호출***
		this.z =z ;
	}
}

public class superTest2 {
	public static void main(String [] args) {
		Point3D p = new Point3D(1, 2, 3);
		System.out.println(p);
	}
}

