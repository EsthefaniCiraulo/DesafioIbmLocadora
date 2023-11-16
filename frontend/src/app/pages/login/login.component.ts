import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService:LoginService, private router:Router) {
    this.form = this.formBuilder.group({
      usuario: '',
      senha: ''
    })
  }

  ngOnInit() {

  }

  login(){
    const usuario = this.form.get("usuario")?.value;
    const senha = this.form.get("senha")?.value;
    this.loginService.login(usuario, senha).subscribe(res=>this.router.navigate(['']), err=>{
      alert("Usuário ou senha Inválidos");
    });
  }

}
