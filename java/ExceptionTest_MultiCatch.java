package exception;

/*
 * 
 * ��Ƽ catch ��
 * 
 * ������ ���� catch���� �ϳ��� ��ģ �� - �ڵ��� �ߺ��� ���̱� ����
 * 
 * �� �θ� �ڽİ���� ���� ����� �ʿ䰡 ����
 * �׳� �θ� ������ �Ǳ� ����
 * 
 * 
 * 	
 * 
 */



public class ExceptionTest_MultiCatch {
	

	public static void main(String args[]) {
		try {
			
		} catch (ExceptionA | ExceptionB e)	{		//�̶��� a���� b���� �𸣱� ������ 
													//��� ���ʸ� ��밡���� �޼��带 ����ϸ� �ȴ�
													//��������e�� a,b ����޼��常 ��밡��
			if(e instanceof ExceptionA) {
				ExceptionA e1 = (ExceptionA)e;		//���� ������ ����ȯ�ϱ� if�������� e�� �߻��� ���� a���� Ȯ���ϴ� ����
													//�ٵ��̷��� ���Ÿ� �׳� ��Ƽ�� �Ⱦ��°� ����
			}
			
		}	// try-catch�� ��
	}	
	
	
}
