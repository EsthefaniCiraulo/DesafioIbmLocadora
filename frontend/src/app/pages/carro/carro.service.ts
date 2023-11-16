import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../../model/veiculo';
import { LoginService } from '../login/login.service';
import { tap, throwError, catchError } from 'rxjs';

const baseUrl = `http://localhost:8080/veiculos`;

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  getAll() {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .get<any>(baseUrl, {
        headers: new HttpHeaders().set('Authorization', token),
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            alert('Sua Sessão expirou, faça login novamente');
            this.loginService.logout();
          }
          return throwError(() => new Error('Alguma coisa deu errado'));
        })
      );
  }

  getById(id: number) {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .get<any>(`${baseUrl}/${id}`, {
        headers: new HttpHeaders().set('Authorization', token),
      })
      .pipe(
        tap((x) => console.log(x)),
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            alert('Sua Sessão expirou, faça login novamente');
            this.loginService.logout();
          }
          return throwError(() => new Error('Alguma coisa deu errado'));
        })
      );
  }

  create(veiculo: Veiculo) {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .post(
        baseUrl,
        {
          marca: veiculo.Marca,
          modelo: veiculo.Modelo,
          placa: veiculo.Placa,
          cor: veiculo.Cor,
          anoFabricacao: veiculo.AnoFabricacao,
        },
        {
          headers: new HttpHeaders().set('Authorization', token),
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            alert('Sua Sessão expirou, faça login novamente');
            this.loginService.logout();
          }
          return throwError(() => new Error('Alguma coisa deu errado'));
        })
      );
  }

  update(veiculo: Veiculo) {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .put(
        `${baseUrl}`,
        {
          id: veiculo.Id,
          marca: veiculo.Marca,
          modelo: veiculo.Modelo,
          placa: veiculo.Placa,
          cor: veiculo.Cor,
          anoFabricacao: veiculo.AnoFabricacao,
        },
        {
          headers: new HttpHeaders().set('Authorization', token),
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            alert('Sua Sessão expirou, faça login novamente');
            this.loginService.logout();
          }
          return throwError(() => new Error('Alguma coisa deu errado'));
        })
      );
  }

  delete(id: number) {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .delete(`${baseUrl}/${id}`, {
        headers: new HttpHeaders().set('Authorization', token),
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401 || error.status == 403) {
            alert('Sua Sessão expirou, faça login novamente');
            this.loginService.logout();
          }
          return throwError(() => new Error('Alguma coisa deu errado'));
        })
      );
  }
}
