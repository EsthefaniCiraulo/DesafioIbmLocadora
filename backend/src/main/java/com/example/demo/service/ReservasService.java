package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Reservas;
import com.example.demo.repository.ReservasRepository;

@Service
public class ReservasService {
	
	@Autowired
	private ReservasRepository reservasRepository;

	public List<Reservas> buscarTodos() {
		List<Reservas> livroEntityList;
		livroEntityList = reservasRepository.findAll();
		return livroEntityList;
	}

	public Optional<Reservas> buscaPorId(int id) {
		Optional<Reservas> reserva = reservasRepository.findById(id);
		if (reserva.isPresent()) {
			return reserva;
		} else
			return null;
	}

	public void inserirAlterarReserva(Reservas reserva) {
		reservasRepository.save(reserva);
	}

	public void apagarReserva(Integer id) {
		Optional<Reservas> reserva = reservasRepository.findById(id);
		if (reserva.isPresent()) {
			reservasRepository.deleteById(id);
		}
	}

}
