package com.example.demo.service.inf;

import java.util.List;
import com.example.demo.vm.SaveUserVM;
import com.example.demo.vm.UserVm;

public interface UserService {
    
    List<UserVm> getUserAll();

    UserVm getUser(String id);

    boolean createUser(SaveUserVM user);

    boolean updateUser(UserVm user);

    boolean deleteUser(String id);

}
