package com.example.demo.entity;

import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User {

	@Id
    private String id = UUID.randomUUID().toString();

    private String name;

    private String username;

    private String email;
 
    private String password;
    
    private String password2;
}