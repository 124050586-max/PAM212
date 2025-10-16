package JSparaPrincipiantes;

import java.util.Arrays;

public class tarea{
    public static void main(String[] args) {
        String[] info = new String[5];

        info[0] = System.getenv("PROCESSOR_IDENTIFIER");
        info[1] = System.getenv("NUMBER_OF_PROCESSORS");
        info[2] = System.getenv("COMPUTERNAME");
        info[3] = System.getenv("USERNAME");
        info[4] = System.getenv("TMP");

        System.out.println(Arrays.toString(info));
    }
}
