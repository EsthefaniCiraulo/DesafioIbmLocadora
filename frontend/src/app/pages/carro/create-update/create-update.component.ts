import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Veiculo } from '../../../model/veiculo';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-create-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-update.component.html',
  styleUrl: './create-update.component.scss',
})
export class CreateUpdateComponent {
  form: FormGroup;
  id: number = 0;
  veiculo?: Veiculo;

  constructor(
    private formBuilder: FormBuilder,
    private carroService: CarroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      marca: '',
      modelo: '',
      placa: '',
      cor: '',
      anoFabricacao: '',
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0) {
      this.carroService.getById(this.id).subscribe(
        (res) => {
          (this.veiculo = new Veiculo(
            res.id,
            res.marca,
            res.modelo,
            res.placa,
            res.anoFabricacao,
            res.cor
          )),
            this.PopularForm(this.veiculo);
        },
        (err) => alert(err.message)
      );
    }
  }

  PopularForm(veiculo: Veiculo) {
    console.log(veiculo);
    this.form = this.formBuilder.group({
      marca: this.veiculo?.Marca,
      modelo: this.veiculo?.Modelo,
      placa: this.veiculo?.Placa,
      cor: this.veiculo?.Cor,
      anoFabricacao: this.veiculo?.AnoFabricacao,
    });
  }

  Cadastrar() {
    const marca = this.form.get('marca')?.value;
    const modelo = this.form.get('modelo')?.value;
    const placa = this.form.get('placa')?.value;
    const cor = this.form.get('cor')?.value;
    const anoFabricacao = this.form.get('anoFabricacao')?.value;
    const veiculo = new Veiculo(
      this.veiculo ? this.veiculo?.Id : 0,
      marca,
      modelo,
      placa,
      anoFabricacao,
      cor
    );
    if (this.veiculo) {
      this.carroService.update(veiculo).subscribe(
        (res) => {
          alert('Veiculo Alterado com Sucesso!');
          this.router.navigate(['/carro']);
        },
        (err) => {
          alert(err.message), console.error(err);
        }
      );
    } else {
      this.carroService.create(veiculo).subscribe(
        (res) => {
          alert('Veiculo Cadastrado com Sucesso!');
          this.router.navigate(['/carro']);
        },
        (err) => {
          alert(err.message), console.error(err);
        }
      );
    }
  }
}
