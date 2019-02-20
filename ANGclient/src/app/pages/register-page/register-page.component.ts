import { Component, OnInit } from '@angular/core';
import { UserModel } from "../../models/user.model";
import { AuthService } from '../../services/auth/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public myTitle: String;
  public formData: UserModel;

  constructor(private router: Router, private authService: AuthService) {
    this.formData = {
      email: undefined,
      name: undefined,
      password: undefined
    }
  }
  
  public formSubmit(): void{
    if(!this.formData.name || !this.formData.email || !this.formData.password){
      alert("Veuillez remplir tous les champs");
    }else{
      this.authService.register(this.formData)
      .then( apiResponse => console.log(apiResponse) )
      .catch( apiResponse => console.error(apiResponse)  );
    }
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
