import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReservaService } from '../reserva.service';
import { CarroService } from '../../carro/carro.service';
import { LoginService } from '../../login/login.service';
import { Reserva } from '../../../model/reserva';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.scss',
})
export class ReservarComponent {
  form: FormGroup;
  idVeiculo: number = 0;

  constructor(
    private reservaService: ReservaService,
    private formBuilder: FormBuilder,
    private usuarioService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      de: '',
      ate: '',
    });
  }

  ngOnInit() {
    this.idVeiculo = this.route.snapshot.params['idVeiculo'];
  }

  Reservar() {
    const de = this.form.get('de')?.value;
    const ate = this.form.get('ate')?.value;
    const reserva = new Reserva(
      0,
      de,
      ate,
      this.idVeiculo,
      this.usuarioService.getUsuarioLogado().id
    );
    console.log({
      dataDe: reserva.De,
      dataAte: reserva.Ate,
      usuario: {
        id: reserva.Usuario.Id,
      },
      veiculo: {
        id: reserva.Veiculo.Id,
      },
    })
    this.reservaService.create(reserva).subscribe(res=>{
      alert("Reserva Realizada com Sucesso!");
      this.router.navigate(['/reserva']);
    });
  }
}
