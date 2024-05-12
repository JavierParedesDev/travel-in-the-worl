import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent  implements OnInit {

    constructor(private authService: AuthService, private router: Router
    , private location: Location
    ) { }

  ngOnInit() { }

  login(email: string, password: string) {
    

  }
  goBack() {
    this.location.back();
  }
}
