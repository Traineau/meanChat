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

  constructor(){
    this.myTitle = 'NodeJs Chat';

  }
}
