package exception;

/*
 * 
 *		���ܹ߻���Ű��	-	throw e;	
 *
 *		1.	new ���ܰ�ü ����
 *		2.	throw ���� �߻�
 *		
 * 
 */



public class ExceptionTest3 {
	

	public static void main(String args[]) {
		try {
			
			Exception e = new Exception("���� �޼��� �� �� ");
			throw e;	//���ܹ߻�
			
		} catch (Exception e)	{		
			
		}
	}	
	
	
}
