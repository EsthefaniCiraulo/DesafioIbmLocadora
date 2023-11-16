import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/usuarios/logar';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  @Output() usuarioLogado:
  EventEmitter<boolean> = new EventEmitter<boolean>();

  usuario: Usuario | null = null;
  constructor(private http: HttpClient, private router:Router) {}

  login(usuario: string, senha: string) {
    return this.http.post(baseUrl, { usuario, senha }).pipe(
      tap((res: any) => {
        console.log(res);
        if (res) localStorage.setItem('usuario', btoa(JSON.stringify(res)));
        else alert('usuario ou senha inválidos');
        this.usuarioLogado.emit(true);
      })
    );
  }

  getTokenUsuarioLogado() {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario') as string)).token
      : null;
  }

  getUsuarioLogado() {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario') as string))
      : null;
  }

  logout(){
    this.usuario = null;
    localStorage.removeItem("usuario");
    this.usuarioLogado.emit(false);
    this.router.navigate(['/login']);
  } 
}
