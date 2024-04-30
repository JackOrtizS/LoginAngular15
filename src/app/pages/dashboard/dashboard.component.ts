import { User } from 'src/app/services/auth/user';
import { LoginService } from './../../services/auth/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  userLoginOn: boolean = false;
  userData?:User ;
constructor(private loginService:LoginService) {}
ngOnInit(): void {

  this.loginService.currentUserLoginOn.subscribe({
    next: (userLoginOn) =>{
      this.userLoginOn = userLoginOn;
    }
  });

  this.loginService.currentUserData.subscribe({
    next: (userData) =>{
      this.userData = userData;
    }
  })

}

ngOnDestroy(): void {
this.loginService.currentUserData.unsubscribe();
}
}
