import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  return ()=>{
    const loginService:LoginService = inject(LoginService);
    if(loginService.getTokenUsuarioLogado()){
      return true;
    }else{
      return false;
    }
  }
};
