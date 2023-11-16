import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private signuService:SignupService, private route:Router) {
    this.form = this.formBuilder.group({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    })
  }

  Cadastrar() {
    const nome = this.form.get("nome")?.value;
    const email = this.form.get("email")?.value;
    const senha = this.form.get("senha")?.value;
    const usuario = Usuario.NovoUsuario(nome, email, senha);
    this.signuService.cadastrarUsuario(usuario).subscribe(res=>{
      alert("Usuario cadastrado com sucesso");
      this.route.navigate(['/login']);
    }, err=>{
      alert(err.message);
    })
  }

}
