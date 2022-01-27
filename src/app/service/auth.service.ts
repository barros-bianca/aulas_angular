import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuario/credenciais', userLogin)
  }

  cadastrar(userModel: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:8080/usuario/cadastro', userModel)
  }
}



