package exception;

/*
 *	오류, 예외는 피할 수 없는 부분 (무조건 있음) 
 * 	프레임워크랑 결합해서 전략적으로 처리함
 * 
 * 	try catch로 모든 예외를 내가 다 처리하면 (예외를 숨기면) 나중에 롤백처리가 되었을 경우
 * 	로그나 모니터링을 통해 예외를 다른사람들이 찾을 수가 없다
 * 
 * 
 * 
 * 컴파일(타임) 에러	
 * 
 * 컴파일러 - 	1. 구문체크 (생략된 구문 추가해주는 것) 
 * 			2. 소스코드 최적화 (간단한 계산같은 경우 컴파일러가 계산함) ex) 3+ 5 컴파일러가 8로 바꿔버린디 
 * 			3. 번역
 * 
 * 런타임 에러 -	실행 중 발생 / 프로그램 죽음
 * 				ex)매개변수로 넘어온 값이 없는데 그 값을 사용시도
 * 				컴파일시에는 기본적인 것들만 체크함 
 * 				
 * 
 * 
 * 논리적 에러	-	컴파일,런타임 안걸렸지만 내가 원하는 결과가 아님
 * 				에러뜬다고해서 프로그램 종료되지 않음
 * 				ex)재고관리프로그램 재고가 음수
 * 
 * 
 * JAVA에서의 런타임 에러
 *  1. 에러 error			-	심각한 오류 
 *  	EX) Out Of Memory Error 메모리부족은 심각함
 *  
 *  2. 예외 exception		-	수습될 수 있는 미약한 오류
 *  					
 *  
 *  ****예외처리		-	(정의) 예외의 발생에 대비한 코드를 작성
 *  				-	(목적) 프로그램 비정상 종료를 막기 위함
 *  
 *  
 *  예외는 2가지로 나뉨
 *  1. Exception클래스와 자손클래스들 			=	사용자실수 / 외적인요인 ex)파일 위치 이동 ,ex)입출력
 *  2. RuntimeException클래스와 자손클래스들	=	프로그래머 실수	ex)산술계산 0으로 나누기, 형변환, null
 * 				
 * 
 
 *
 */

//CMD
// alt + enter (IDE에서 작업중인 주소지 확인)
//컴파일 = javac ExceptionTest.java
//런타임 = java ExceptionTest


public class ExceptionTest {
	

	//*	try catch로 AriithmeticException e 걸면 만약에 다른 오류 널포인트나 인덱스오브바운드 걸리면
	//*	catch에 잡히지 않고 그대로 프로그램 종료된다 (비정상 종료)
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
	
	//이 경우에는 4는 출력안되고 그전에 catch 절로 이동후 마지막 6까지 가서 정상종료
	public static void main2(String args[]) {
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
		} catch (Exception e){
			System.out.println("Exception");
		}	// try-catch의 끝
		System.out.println(6);
	}	// main메서드의 끝
}
