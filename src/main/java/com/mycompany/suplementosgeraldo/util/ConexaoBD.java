package com.mycompany.suplementosgeraldo.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoBD {

    public static Connection getConnection() throws SQLException {
        String url = "jdbc:mysql://localhost:3306/suplementos_geraldo";
        String user = "root";
        String password = "senha";  // Coloque sua senha aqui
        return DriverManager.getConnection(url, user, password);
    }
}
