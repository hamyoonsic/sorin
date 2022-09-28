package exception;

/*
 * 
 *		예외발생시키기	-	throw e;	
 *
 *		1.	new 예외객체 생성
 *		2.	throw 예외 발생
 *		
 * 
 */



public class ExceptionTest3 {
	

	public static void main(String args[]) {
		try {
			
			Exception e = new Exception("예외 메세지 들어갈 곳 ");
			throw e;	//예외발생
			
		} catch (Exception e)	{		
			
		}
	}	
	
	
}
