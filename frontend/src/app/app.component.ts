import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from './model/usuario';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DesafioIbm';
  usuario?: any;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.usuarioLogado.subscribe((x) => {
      console.log('atualizei');
      this.usuario = this.loginService.getUsuarioLogado();
      console.log(this.usuario);
    });
    this.usuario = this.loginService.getUsuarioLogado();
  }

  Logout(){
    this.loginService.logout();
  }
}
