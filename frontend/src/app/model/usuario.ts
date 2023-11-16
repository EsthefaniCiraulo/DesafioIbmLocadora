export class Usuario {

    #id: number;
    #nome: string;
    #email: string;
    #senha: string;
    #cpf: string;
    #telefone: string;

    constructor(id: number, nome: string, email: string, senha: string, cpf: string, telefone: string) {
        this.#id = id;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#email = email;
        this.#telefone = telefone;
        this.#senha = senha;
    }

    public static NovoUsuario(nome:string, email:string, senha:string){
        return new Usuario(0, nome, email, senha, "", "");
    }

    get Id() {
        return this.#id;
    }

    get Nome() {
        return this.#nome;
    }

    get Cpf() {
        return this.#cpf;
    }

    get Email() {
        return this.#email;
    }

    get Senha() {
        return this.#senha;
    }

    get Telefone() {
        return this.#telefone;
    }


}