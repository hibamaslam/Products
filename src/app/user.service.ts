import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

registerUser(user)
{
  return this.http.post("http://localhost:3000/api/register", user);
} 

loginUser(user)
{
  return this.http.post("http://localhost:3000/api/login", user);
} 

loggedIn()
{
  return !!localStorage.getItem('token');
}

// getToken()
// {
//   return localStorage.getItem('token');
// }

}