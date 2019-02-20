import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { UserModel } from "../../models/user.model";
import { CookieService } from 'angular2-cookie/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userName: String = '';

  // variables
  private apiUrl: String = 'http://localhost:9876/api/auth'

  constructor( private http: HttpClient, private _cookieService:CookieService ) { }

  public register( data: UserModel ): Promise<any>{
    // Configurer le header de la requête
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Créer la requête
    return this.http.post( `${this.apiUrl}/register`, data, { headers: myHeader } )
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }  

  public login( data: UserModel ): Promise<any>{
    // Configurer le header de la requête
    let myHeader = new HttpHeaders();
    myHeader.append('Content-Type', 'application/json');

    // Créer la requête
    return this.http.post( `${this.apiUrl}/login`, data, { headers: myHeader } )
    .toPromise()
    .then(this.getData)
    .catch(this.handleError);
  }  

  // Get the API response
  private getData(res: any){
      return res || {};
  }

  // Get the APi error
  private handleError(err: any){
    return Promise.reject(err);
  }

  // Delete the hetic-blog cookie
  public logOut(){
    this._cookieService.remove('my-token');
    this.userName = '';
  }

  // Check the hetic-blog cookie to see if the user is logged in
  public isLoggedIn(){
    return this._cookieService.get('my-token') ? true : false;
  }
}
