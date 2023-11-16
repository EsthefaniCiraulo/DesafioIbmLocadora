import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario';

const baseUrl = `http://localhost:8080/usuarios/cadastrar`;

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(baseUrl, {
      nome: usuario.Nome,
      usuario: usuario.Email,
      senha: usuario.Senha,
    });
  }
}
