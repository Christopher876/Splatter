package net.christopherw.splatter.models;

import javax.persistence.*;

@Entity
public class User {
    @Id
    private String username;
    public String password;
    private String firstname;
    private String lastname;
    private String email;
    private String publickey;
    private String profilepic; // Url to where this is stored... leaving this null for now

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getEmail() {
        return email;
    }

    public String getPublickey() {
        return publickey;
    }
}
