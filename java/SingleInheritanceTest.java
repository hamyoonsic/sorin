package inheritanceTest;

// 자바는 단일 상속만 가능 (인터페이스는 여러개 상속 가능)
// 다중상속 효과내는 방법 = 비중이 높은 클래스 하나만 상속 .. 나머지는 포함관계로 한다

//부모가 없는 고아클래스는 자동적으로 오브젝트 클래스를 상속받음


/*0class Tv{
	
}

컴파일러가 자동적으로 오브젝트 추가해줌

class Tv extens Object {
	
}

*이경우 오브젝트의 11개 메서드를 상속받음 toString/ equals, hashCode 등등
*
*
*toString() = 객체의 주소값을 반환 .. ex) Circle@123456
*
*printLn은 참조변수만 들어오면 toString을 호출해서 c.toString()으로 바꿔줌
*		Circle c = new Circle();
		System.out.println(c);
		System.out.println(c.toString());
*/



public class SingleInheritanceTest {
	public static void main(String [] args) {
		
		
		
	}
}
