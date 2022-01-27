import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';
 
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
 
  userModel : UserModel = new UserModel
  confirmarSenha: string
  typeUsuario: string

  constructor(
    private authService : AuthService,
    private router: Router
 
  ) { }
 
  ngOnInit() {
 
    window.scroll (0,0)
  }
 
  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }
 
  typeUser(event: any) {
    this.typeUsuario = event.target.value
  }
 
  cadastrar() {
    this.userModel.type = this.typeUsuario
 
    if (this.userModel.password != this.confirmarSenha){
      alert('As senhas são diferentes')
 
    } else{
    this.authService.cadastrar(this.userModel).subscribe ((resp : UserModel) =>{
      this.userModel = resp
      this.router.navigate (['/credenciais'])
      alert('Usuário cadastrado com sucesso!')}
 
    )}
 
    }
  }
