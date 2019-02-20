import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loginData: UserModel;

  constructor(private router: Router,private authService: AuthService) {
    this.loginData = {
      email: undefined,
      password: undefined
    };
  }

  public loginUser(): void {
    this.authService
      .login(this.loginData)
      // Stocke le nom de l'utilisateur
      .then((apiResponse) => this.authService.userName = apiResponse.data.name)
      .catch(apiResponse => console.error(apiResponse));

      this.router.navigate(['/chat'])
  }

  ngOnInit() {}
}
