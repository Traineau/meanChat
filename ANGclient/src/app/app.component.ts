// Imports
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

// Définition
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

// Export
export class AppComponent {
  public myTitle: String;
  public myStatus: String;

  constructor(private authService : AuthService){
    this.myTitle = 'NodeJs Chat';
    this.myStatus = authService.isLoggedIn() ? 'Connecté' : 'Deconnecté';
  }

  public logOut(){
    console.log("Deconexion");
    // Delete cookie with authService's function
    this.authService.logOut();
    // Redirection
    window.location.href = '/';
  }
}
