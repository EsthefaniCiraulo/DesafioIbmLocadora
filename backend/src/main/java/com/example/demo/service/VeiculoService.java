package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.VeiculoRepository;
import com.example.demo.model.Veiculo;

@Service
public class VeiculoService {

	@Autowired
	private VeiculoRepository veiculoRepository;

	public List<Veiculo> buscarTodos() {
		List<Veiculo> veiculos;
		veiculos = veiculoRepository.findAll();
		return veiculos;
	}

	public Optional<Veiculo> buscaPorId(int id) {
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		if (veiculo.isPresent()) {
			return veiculo;
		} else
			return null;
	}

	public void inserirAlterarVeiculo(Veiculo veiculo) {
		veiculoRepository.save(veiculo);
	}

	public void apagarVeiculo(Integer id) {
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		if (veiculo.isPresent()) {
			veiculoRepository.deleteById(id);
		}
	}
}
