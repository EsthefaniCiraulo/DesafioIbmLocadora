import { Usuario } from './usuario';
import { Veiculo } from './veiculo';

export class Reserva {
  #id: number;
  #de: Date;
  #ate: Date;
  #veiculo: Veiculo;
  #usuario: Usuario;

  constructor(
    id: number,
    de: Date,
    ate: Date,
    idVeiculo: number,
    idUsuario: number
  ) {
    this.#id = id;
    this.#de = de;
    this.#ate = ate;
    this.#veiculo = new Veiculo(idVeiculo, '', '', '', 0, '');
    this.#usuario = new Usuario(idUsuario, '', '', '', '', '');
  }

  get Id() {
    return this.#id;
  }

  get De() {
    return this.#de;
  }

  get Ate() {
    return this.#ate;
  }

  get Veiculo() {
    return this.#veiculo;
  }

  get Usuario() {
    return this.#usuario;
  }
}
