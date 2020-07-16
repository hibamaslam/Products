import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedUser= {email:"",password:""};
  constructor(private _user:UserService,private _router:Router) { }

  loginUser(){
    this._user.loginUser(this.loggedUser)
    .subscribe(
      res=>{
        console.log(this.loggedUser);
        console.log(res['token']);
        localStorage.setItem('token',res["token"]),
        this._router.navigate(['/'])
      },
      (err)=>
      { console.log(err)}
    )
  }
  ngOnInit(): void {
  }

}
