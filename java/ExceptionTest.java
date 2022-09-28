package exception;

/*
 *	����, ���ܴ� ���� �� ���� �κ� (������ ����) 
 * 	�����ӿ�ũ�� �����ؼ� ���������� ó����
 * 
 * 	try catch�� ��� ���ܸ� ���� �� ó���ϸ� (���ܸ� �����) ���߿� �ѹ�ó���� �Ǿ��� ���
 * 	�α׳� ����͸��� ���� ���ܸ� �ٸ�������� ã�� ���� ����
 * 
 * 
 * 
 * ������(Ÿ��) ����	
 * 
 * �����Ϸ� - 	1. ����üũ (������ ���� �߰����ִ� ��) 
 * 			2. �ҽ��ڵ� ����ȭ (������ ��갰�� ��� �����Ϸ��� �����) ex) 3+ 5 �����Ϸ��� 8�� �ٲ������ 
 * 			3. ����
 * 
 * ��Ÿ�� ���� -	���� �� �߻� / ���α׷� ����
 * 				ex)�Ű������� �Ѿ�� ���� ���µ� �� ���� ���õ�
 * 				�����Ͻÿ��� �⺻���� �͵鸸 üũ�� 
 * 				
 * 
 * 
 * ���� ����	-	������,��Ÿ�� �Ȱɷ����� ���� ���ϴ� ����� �ƴ�
 * 				������ٰ��ؼ� ���α׷� ������� ����
 * 				ex)���������α׷� ��� ����
 * 
 * 
 * JAVA������ ��Ÿ�� ����
 *  1. ���� error			-	�ɰ��� ���� 
 *  	EX) Out Of Memory Error �޸𸮺����� �ɰ���
 *  
 *  2. ���� exception		-	������ �� �ִ� �̾��� ����
 *  					
 *  
 *  ****����ó��		-	(����) ������ �߻��� ����� �ڵ带 �ۼ�
 *  				-	(����) ���α׷� ������ ���Ḧ ���� ����
 *  
 *  
 *  ���ܴ� 2������ ����
 *  1. ExceptionŬ������ �ڼ�Ŭ������ 			=	����ڽǼ� / �����ο��� ex)���� ��ġ �̵� ,ex)�����
 *  2. RuntimeExceptionŬ������ �ڼ�Ŭ������	=	���α׷��� �Ǽ�	ex)������ 0���� ������, ����ȯ, null
 * 				
 * 
 
 *
 */

//CMD
// alt + enter (IDE���� �۾����� �ּ��� Ȯ��)
//������ = javac ExceptionTest.java
//��Ÿ�� = java ExceptionTest


public class ExceptionTest {
	

	//*	try catch�� AriithmeticException e �ɸ� ���࿡ �ٸ� ���� ������Ʈ�� �ε�������ٿ�� �ɸ���
	//*	catch�� ������ �ʰ� �״�� ���α׷� ����ȴ� (������ ����)
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
	
	//�� ��쿡�� 4�� ��¾ȵǰ� ������ catch ���� �̵��� ������ 6���� ���� ��������
	public static void main2(String args[]) {
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
		} catch (Exception e){
			System.out.println("Exception");
		}	// try-catch�� ��
		System.out.println(6);
	}	// main�޼����� ��
}
