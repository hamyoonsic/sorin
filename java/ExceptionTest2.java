package exception;

/*
 * 
 * 
 * 	���� ���ܹ߻��� ���ܰ�ü e �� �����Ѵ�
 * 	�� ��ü�ȿ��� ���ܿ� ���� ������ �� �ְ�
 * 	�Ʒ��� �޼��带 ����� �� �ִ�.
 * 
 *  �������� e�� catch�� ������������ ��밡�� (��ȿ���� scope)	
 * 
 * 	printStackTrace()	-	ȣ�⽺��(call stack)�� �ִ� �޼�������+ ���ܸ޼��� ��� 
 * 
 * 
 *  getMessage()		-	����Ŭ������ �ν��Ͻ��� ����� �޼��� ���
 * 
 */



public class ExceptionTest2 {
	

	public static void main(String args[]) {
		System.out.println(1);			
		System.out.println(2);
		try {
			System.out.println(3);
			System.out.println(args [0]);
			System.out.println(4); 	// ������� �ʴ´�.
		} catch (ArithmeticException ae)	{
			if (ae instanceof ArithmeticException) 
				System.out.println("true");	
			System.out.println("ArithmeticException");
		/*} catch (Exception e){
			System.out.println("Exception");
		*/}	// try-catch�� ��
		System.out.println(6);
	}	// main�޼����� ��
	
	
}
