package com.example.demo.controller;


import java.util.List;
import com.example.demo.service.inf.UserService;
import com.example.demo.vm.SaveUserVM;
import com.example.demo.vm.UserVm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	

    @Autowired
    private UserService userService;
    
    @GetMapping()
    public ResponseEntity<List<UserVm>> getUserAll() {
        List<UserVm> result = userService.getUserAll();
        return new ResponseEntity<List<UserVm>>(result, HttpStatus.OK);
    }
    
    @GetMapping("{id}")
    public ResponseEntity<UserVm> getUser(@PathVariable("id") String id) {
        UserVm result = userService.getUser(id);
        return new ResponseEntity<UserVm>(result, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<String> createUser(@RequestBody SaveUserVM user) {
        userService.createUser(user);
        return new ResponseEntity<String>(HttpStatus.CREATED);
    }

    @PutMapping()
    public ResponseEntity<String> updateUser(@RequestBody UserVm user) {
        userService.updateUser(user);
        return new ResponseEntity<String>(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
        return new ResponseEntity<String>(HttpStatus.OK);
    }

}
