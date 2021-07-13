import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SaveUserVM } from 'src/app/models/SaveUserVM';
import { UserVm } from 'src/app/models/UserVm';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new SaveUserVM();
  userList = new Array<UserVm>();
  userName = "KO";
  isUpdate = false;

  list = ["ko", "bom", "tree"]

  userForm = this.fb.group({
    id: [''],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {

    console.log('User Form >>', this.userForm);
    this.getAll();

  }

  getAll() {
    this.userService.getAll().then(res => {
      console.log('user all', res);
      this.userList = res;
    }).catch(ex => {
      console.log(ex);
    }).finally(() => {
      // someing
    });
  }
  onSave() {
    // console.log('User >>', this.user);
    if (!this.userForm.valid) {
      console.log("inValid!!");
      return;
    }

    let userName = this.userForm.get('userName')?.value
    let passWord = this.userForm.get('passWord')?.value
    let name = this.userForm.get('name')?.value
    let email = this.userForm.get('email')?.value
    console.log(userName);
    console.log(passWord);
    console.log(name);
    console.log(email);
    this.user.username = userName;
    this.user.password = passWord;
    this.user.name = name;
    this.user.email = email;
    console.log('user', this.user);

    //api
    this.userService.save(this.user).then(res => {
      console.log(res);
    }).catch(ex => {
      console.log(ex);
    }).finally(() => {
      // someing
    });

  }

  onUpdate() {
    let id = this.userForm.get('id')?.value
    let userName = this.userForm.get('userName')?.value
    let passWord = this.userForm.get('passWord')?.value
    let name = this.userForm.get('name')?.value
    let email = this.userForm.get('email')?.value
    this.user.id = id;
    this.user.username = userName;
    this.user.password = passWord;
    this.user.name = name;
    this.user.email = email;

     //api
     this.userService.update(this.user).then(res => {
      console.log(res);
      this.getAll();
    }).catch(ex => {
      console.log(ex);
    }).finally(() => {
      // someing
    });
  }

  onEdit(id: string) {
    console.log(id);
    this.isUpdate = true;
    this.userService.getUser(id).then(res => {
      console.log(res);
      this.setForm(res);
    }).catch(ex => {
      console.log(ex);
    }).finally(() => {
      // someing
    });
  }

  setForm(user: UserVm) {
    this.userForm.get('id')?.setValue(user.id);
    this.userForm.get('userName')?.setValue(user.username);
    this.userForm.get('passWord')?.disable();
    this.userForm.get('name')?.setValue(user.name);
    this.userForm.get('email')?.setValue(user.email);
  }

  onDelete(id: string) {
    this.userService.delete(id).then(() => {
      this.getAll();
    }).catch(ex => {
      console.log(ex);
    }).finally(() => {
      // someing
    });
  }

}
