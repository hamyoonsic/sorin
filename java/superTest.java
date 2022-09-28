package superTest;


/*		
 * 		
 *	조상 super
 *	자신 this
 *	
 *
 *	
 */


class Parent { int x = 10;}

class Child extends Parent {
	void method() {
		System.out.println(x);
		System.out.println(this.x);
		System.out.println(super.x);
	}
	
}


public class superTest {
	public static void main(String [] args) {
		Child c = new Child();
		c.method();
	
	}
}

