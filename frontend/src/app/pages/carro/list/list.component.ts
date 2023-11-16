import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Veiculo } from '../../../model/veiculo';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  veiculos: Veiculo[] = [];

  constructor(private veiculoService: CarroService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
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
        console.log(this.veiculos);
      },
      (err) => console.error(err)
    );
  }

  excluir(id: number) {
    const confirmar = confirm('Tem certeza que deseja excluir este registro');
    if (confirmar) {
      this.veiculoService.delete(id).subscribe((res) => {
        alert('Dados Excluidos com Sucesso');
        this.carregarDados();
      });
    }
  }
}
