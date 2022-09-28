package exception;

/*
 * 
 * 멀티 catch 블럭
 * 
 * 내용이 같은 catch블럭을 하나로 합친 것 - 코드의 중복을 줄이기 위함
 * 
 * 단 부모 자식관계면 굳이 사용할 필요가 없다
 * 그냥 부모만 적으면 되기 때문
 * 
 * 
 * 	
 * 
 */



public class ExceptionTest_MultiCatch {
	

	public static void main(String args[]) {
		try {
			
		} catch (ExceptionA | ExceptionB e)	{		//이때는 a인지 b인지 모르기 때문에 
													//어느 한쪽만 사용가능한 메서드를 사용하면 안댐
													//참조병수e는 a,b 공통메서드만 사용가능
			if(e instanceof ExceptionA) {
				ExceptionA e1 = (ExceptionA)e;		//굳이 쓰려면 형변환하기 if절조건은 e가 발생된 곳이 a인지 확인하는 것임
													//근데이렇게 쓸거면 그냥 멀티블럭 안쓰는게 좋다
			}
			
		}	// try-catch의 끝
	}	
	
	
}
