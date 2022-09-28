package exception;

/*
 * 
 * 
 * 	보통 예외발생시 예외객체 e 를 생성한다
 * 	그 객체안에는 예외에 대한 정보가 들어가 있고
 * 	아래의 메서드를 사용할 수 있다.
 * 
 *  참조변수 e는 catch블럭 끝날때까지만 사용가능 (유효범위 scope)	
 * 
 * 	printStackTrace()	-	호출스택(call stack)에 있는 메서드정보+ 예외메세지 출력 
 * 
 * 
 *  getMessage()		-	예외클래스의 인스턴스에 저장된 메세지 얻기
 * 
 */



public class ExceptionTest2 {
	

	public static void main(String args[]) {
		System.out.println(1);			
		System.out.println(2);
		try {
			System.out.println(3);
			System.out.println(args [0]);
			System.out.println(4); 	// 실행되지 않는다.
		} catch (ArithmeticException ae)	{
			if (ae instanceof ArithmeticException) 
				System.out.println("true");	
			System.out.println("ArithmeticException");
		/*} catch (Exception e){
			System.out.println("Exception");
		*/}	// try-catch의 끝
		System.out.println(6);
	}	// main메서드의 끝
	
	
}
