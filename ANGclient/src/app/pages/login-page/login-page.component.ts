import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginData: UserModel;

  constructor(private authService: AuthService) {
    this.loginData = {
      email: undefined,
      password: undefined
    };
  }

  public loginUser(): void {
    this.authService
      .login(this.loginData)
      .then(() => window.location.href = '/')
      .catch(apiResponse => console.error(apiResponse));
  }

  ngOnInit() {}
}
