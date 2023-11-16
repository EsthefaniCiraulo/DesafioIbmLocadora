package com.example.demo.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_reservas")
public class Reservas {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@NotNull(message = "O Atributo dataDe é Obrigatório!")
	private LocalDateTime dataDe;

	@NotNull(message = "O Atributo dataAte é Obrigatório!")
	private LocalDateTime dataAte;

	@ManyToOne
	@JoinColumn(name = "id_veiculo", nullable = false, unique = false)
	private Veiculo veiculo;

	@ManyToOne
	@JoinColumn(name = "id_usuario", nullable = false, unique = false)
	private Usuario usuario;

	public Reservas(Integer id, LocalDateTime dataDe, LocalDateTime dataAte, Veiculo veiculo, Usuario usuario) {
		this.id = id;
		this.dataDe = dataDe;
		this.dataAte = dataAte;
		this.veiculo = veiculo;
		this.usuario = usuario;
	}
	
	public Reservas() {}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getDataDe() {
		return dataDe;
	}

	public void setDataDe(LocalDateTime dataDe) {
		this.dataDe = dataDe;
	}

	public LocalDateTime getDataAte() {
		return dataAte;
	}

	public void setDataAte(LocalDateTime dataAte) {
		this.dataAte = dataAte;
	}

	public Veiculo getVeiculo() {
		return veiculo;
	}

	public void setVeiculo(Veiculo veiculo) {
		this.veiculo = veiculo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}