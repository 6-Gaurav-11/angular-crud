import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post("http://localhost:3000/users", user);
  }

  updateUser(user: any) {
    return this.http.put("http://localhost:3000/users/" + user.id, user);
  }

  getAllUser() {
    return this.http.get("http://localhost:3000/users");
  }
  
  deleteUser(user: any) {
    return this.http.delete("http://localhost:3000/users/" + user.id);
  }
}
