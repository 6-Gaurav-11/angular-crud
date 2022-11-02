import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrud';
  allUsers: any;
  userObj= {           //dummy object
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }

  isEdit = false;

  constructor(private srv: CommonService){}

  ngOnInit(): void {
    this.getLatestUser();
  }

  getLatestUser() {
    this.srv.getAllUser().subscribe((response)=> {
      this.allUsers = response;
    });
  }

  addUser(formObj: any) {
    console.log(formObj);
    this.srv.createUser(formObj).subscribe((response) => {
      this.getLatestUser();
      console.log("User Created");
    })
  }

  editUser(user: any) {
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user: any) {
    this.srv.deleteUser(user).subscribe(()=> {
      this.getLatestUser();
    })
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.srv.updateUser(this.userObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }
}
