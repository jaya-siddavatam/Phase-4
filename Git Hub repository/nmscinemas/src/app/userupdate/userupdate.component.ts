import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
 
  loginRef = new FormGroup({
    emailid:new FormControl(),
    username:new FormControl(),
    password:new FormControl(),
    location:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }

  updateprofile() {
    console.log(this.loginRef.value)
    let login = this.loginRef.value;
    this.ls.updateprofile(login).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
  }

}