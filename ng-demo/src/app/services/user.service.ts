import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SaveUserVM } from '../models/SaveUserVM';
import { UserVm } from '../models/UserVm';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  save(user: SaveUserVM) {
    return this.http.post(`${environment.api_url}/user`, user).toPromise();
  }

  update(user: SaveUserVM) {
    return this.http.put(`${environment.api_url}/user`, user).toPromise();
  }

  getAll() {
    return this.http.get<Array<UserVm>>(`${environment.api_url}/user`).toPromise();
  }

  getUser(id: string) {
    return this.http.get<UserVm>(`${environment.api_url}/user/${id}`).toPromise();
  }

  delete(id: string) {
    return this.http.delete(`${environment.api_url}/user/${id}`).toPromise();
  }

}
