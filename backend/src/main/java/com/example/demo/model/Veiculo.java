package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "tb_veiculos")
public class Veiculo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotNull(message = "O Atributo modelo é obrigatório")
	private String modelo;

	@NotNull(message = "O Atributo marca é obrigatório")
	private String marca;

	@NotNull(message = "O Atributo placa é obrigatório")
	private String placa;

	@NotNull(message = "O Atributo cor é obrigatório")
	private String cor;
	
	@NotNull(message = "O Atributo Ano Fabricação é obrigatório")
	private Integer anoFabricacao;

	public Veiculo(Integer id, String modelo, String marca, String placa, String cor, Integer anoFabricacao) {
		this.id = id;
		this.modelo = modelo;
		this.marca = marca;
		this.placa = placa;
		this.cor = cor;
		this.anoFabricacao = anoFabricacao;
	}
	
	public Integer getAnoFabricacao() {
		return anoFabricacao;
	}

	public void setAnoFabricacao(Integer anoFabricacao) {
		this.anoFabricacao = anoFabricacao;
	}

	public Veiculo() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}

}