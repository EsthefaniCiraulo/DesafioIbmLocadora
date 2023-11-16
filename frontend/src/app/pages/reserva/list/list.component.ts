import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Veiculo } from '../../../model/veiculo';
import { CarroService } from '../../carro/carro.service';
import { RouterLink } from '@angular/router';
import { ReservaService } from '../reserva.service';
import { Reserva } from '../../../model/reserva';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  veiculos: Veiculo[] = [];
  reservas: Reserva[] = [];
  somenteDisponiveis: Boolean = false;

  constructor(
    private veiculoService: CarroService,
    private reservaService: ReservaService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.CarregarReservas();
  }

  CarregarVeiculos() {
    this.veiculoService.getAll().subscribe(
      (res) => {
        console.log(res);
        this.veiculos = res.map(
          (x: any) =>
            new Veiculo(
              x.id,
              x.marca,
              x.modelo,
              x.placa,
              x.anoFabricacao,
              x.cor
            )
        );
        if (this.somenteDisponiveis) {
          this.reservas.forEach((reserva) => {
            if(reserva.Usuario.Id != this.loginService.getUsuarioLogado().id){
              this.veiculos = this.veiculos.filter(
                (x) => x.Id != reserva.Veiculo.Id
              );
            }
          });
        }
      },
      (err) => console.error(err)
    );
  }

  CarregarReservas() {
    this.reservaService.getAll().subscribe(
      (res) => {
        console.log(res);
        this.reservas = res.map(
          (x: any) =>
            new Reserva(x.id, x.dataDe, x.dataAte, x.veiculo.id, x.usuario.id)
        );
        console.log(this.reservas);
        this.CarregarVeiculos();
      },
      (err) => console.error(err)
    );
  }

  VerificarDisponibilidade(idVeiculo: number) {
    const reserva = this.reservas.find((x) => x.Veiculo.Id == idVeiculo);
    return reserva ? false : true;
  }

  VerificaUsuarioReserva(idVeiculo: number) {
    const reserva = this.reservas.find((x) => x.Veiculo.Id == idVeiculo);
    if (reserva) {
      if (reserva.Usuario.Id == this.loginService.getUsuarioLogado().id) {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

  CancelarReserva(id: number) {
    const reserva = this.reservas.find((x) => x.Veiculo.Id == id);
    if (reserva)
      this.reservaService.delete(reserva.Id).subscribe(
        (res) => {
          alert('Reserva Cancelada com Sucesso');
          this.CarregarReservas();
        },
        (err) => alert(err.message)
      );
  }

  ExibirSomenteDisponiveis() {
    this.somenteDisponiveis = !this.somenteDisponiveis;
    this.CarregarReservas();
  }
}
