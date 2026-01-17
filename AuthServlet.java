package com.rapidscan.controller;

import com.rapidscan.dao.UserDAO;
import com.rapidscan.model.User;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "AuthServlet", urlPatterns = {"/auth/*"})
public class AuthServlet extends HttpServlet {
    
    private UserDAO userDAO;

    public void init() {
        userDAO = new UserDAO();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String path = request.getPathInfo();
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        // Simple JSON reading
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            buffer.append(line);
        }
        String json = buffer.toString();

        if ("/login".equals(path)) {
            handleLogin(json, request, out);
        } else if ("/signup".equals(path)) {
            handleSignup(json, request, out);
        } else {
            response.setStatus(404);
            out.print("{\"message\": \"Endpoint not found\"}");
        }
    }

    private void handleLogin(String json, HttpServletRequest request, PrintWriter out) {
        String email = extractJsonValue(json, "email");
        String password = extractJsonValue(json, "password");

        User user = userDAO.checkLogin(email, password);

        if (user != null) {
            HttpSession session = request.getSession();
            session.setAttribute("user", user);
            
            // Return success JSON
            out.print(String.format("{\"success\": true, \"data\": {\"user\": {\"firstName\": \"%s\", \"lastName\": \"%s\", \"email\": \"%s\"}}}", 
                user.getFirstName(), user.getLastName(), user.getEmail()));
        } else {
            out.print("{\"success\": false, \"message\": \"Invalid email or password\"}");
        }
    }

    private void handleSignup(String json, HttpServletRequest request, PrintWriter out) {
        String firstName = extractJsonValue(json, "firstName");
        String lastName = extractJsonValue(json, "lastName");
        String email = extractJsonValue(json, "email");
        String password = extractJsonValue(json, "password");

        if (userDAO.isEmailExists(email)) {
            out.print("{\"success\": false, \"message\": \"Email already registered\"}");
            return;
        }

        User newUser = new User(firstName, lastName, email, password);
        boolean success = userDAO.registerUser(newUser);

        if (success) {
            out.print("{\"success\": true, \"message\": \"User registered successfully\"}");
        } else {
            out.print("{\"success\": false, \"message\": \"Registration failed\"}");
        }
    }

    // Helper to extract value from JSON string (very basic, assumes simple format)
    private String extractJsonValue(String json, String key) {
        String searchKey = "\"" + key + "\":";
        int start = json.indexOf(searchKey);
        if (start == -1) return "";
        
        start += searchKey.length();
        
        // Find start of value (quote)
        int valueStart = json.indexOf("\"", start) + 1;
        int valueEnd = json.indexOf("\"", valueStart);
        
        return json.substring(valueStart, valueEnd);
    }
}
