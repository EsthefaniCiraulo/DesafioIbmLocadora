import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  constructor(private loginService:LoginService, private route:Router){}

  ngOnInit(){
    if(!this.loginService.getTokenUsuarioLogado()){
      alert('É necessário fazer login para acessar esta pagina');
      this.route.navigate(['/login']);
    }
  }
}
