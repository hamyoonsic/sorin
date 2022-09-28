package superTest;


/*	super()	
 * 		
 *	super()�� this , super�� ������� ��������
 *	���� ������ ȣ���
 *	
 *	++������, �ʱ�ȭ���� ��� x
 *
 *
 *	ù�ٿ� ������ ȣ���� ���� ���   ***�������� ù���� �׻� ������ȣ��********
 *	�����Ϸ��� super(); �� �ڵ����� ����
 *
 *	������ Ŭ���������� �⺻�����ڰ� �� �ʿ��� ��
 *
 *	
 *	point�� super = object
 *	point3d�� super = point
 *
 */


class Point { 
	int x,y;
	
	Point (int x, int y){
		this.x = x;	// ***�������� ù���� �׻� ������ȣ��*** �̰�� ������ȣ�� ���⿡ �����Ϸ��� super(); �߰� super(); = object();
		this.y = y;
	}
}


class Point3D extends Point {
	int z ;
	
	Point3D (int x, int y, int z){
		super(x,y);			// ������ �����ڸ� ȣ��			//  ***�������� ù���� �׻� ������ȣ��***
		this.z =z ;
	}
}

public class superTest2 {
	public static void main(String [] args) {
		Point3D p = new Point3D(1, 2, 3);
		System.out.println(p);
	}
}

