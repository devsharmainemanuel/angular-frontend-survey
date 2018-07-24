import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Headers } from '@angular/http';
import { Response } from './response.ts';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public base_url = 'http://laravel-backend-survey.loc/api';

  getQuestions() {
    return this.http.get(this.base_url + '/questions');
  }

  login(login_credentials) {
    console.log(login_credentials);
    return this.http.post(this.base_url + '/login', login_credentials);
  }


}



