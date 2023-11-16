export class Veiculo {
    #id: number;
    #marca: string;
    #modelo: string;
    #placa: string;
    #anoFabricacao: number;
    #cor: string;

    constructor(id: number, marca: string, modelo: string, placa: string, anoFabricacao: number, cor: string) {
        this.#id = id;
        this.#marca = marca;
        this.#modelo = modelo;
        this.#placa = placa;
        this.#anoFabricacao = anoFabricacao;
        this.#cor = cor;
    }

    get Id() {
        return this.#id;
    }

    get Marca() {
        return this.#marca;
    }

    get Modelo() {
        return this.#modelo;
    }

    get Placa() {
        return this.#placa;
    }

    get AnoFabricacao() {
        return this.#anoFabricacao;
    }
    
    get Cor() {
        return this.#cor;
    }

}