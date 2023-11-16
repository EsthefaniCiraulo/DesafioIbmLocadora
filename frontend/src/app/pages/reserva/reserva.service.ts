import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { catchError, tap, throwError } from 'rxjs';
import { Reserva } from '../../model/reserva';

const baseUrl = `http://localhost:8080/reservas`;

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
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

  create(reserva: Reserva) {
    const token = this.loginService.getTokenUsuarioLogado();
    return this.http
      .post(
        baseUrl,
        {
          dataDe: reserva.De,
          dataAte: reserva.Ate,
          usuario: {
            id: reserva.Usuario.Id,
          },
          veiculo: {
            id: reserva.Veiculo.Id,
          },
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
