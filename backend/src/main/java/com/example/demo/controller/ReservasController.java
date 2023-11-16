package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Reservas;
import com.example.demo.service.ReservasService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservasController {
    
    @Autowired
    private ReservasService reservaService;
    
    @GetMapping
    public ResponseEntity<List<Reservas>> getAll(){
        return ResponseEntity.ok(reservaService.buscarTodos());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id){
    	Optional<Reservas> reserva = reservaService.buscaPorId(id);
    	if(reserva!=null) {
    		return ResponseEntity.status(200).body(reserva);
    	}
    	
    	return ResponseEntity.status(404).body("Nenhuma Reserva Encontrada");
    	
    }
    
    @PostMapping
    public ResponseEntity post(@Valid @RequestBody Reservas reserva){
    	reservaService.inserirAlterarReserva(reserva);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(reserva);
    }
    
    @PutMapping
    public ResponseEntity put(@Valid @RequestBody Reservas reserva){
    	if(reserva.getId()!=null) {
    		reservaService.inserirAlterarReserva(reserva);
    		return ResponseEntity.status(200).body(reserva);
    	}else {
    		return ResponseEntity.status(500).body("Erro ao alterar a Reserva");
    	}
    }
    
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
    	reservaService.apagarReserva(id);
    	return ResponseEntity.status(200).body(id);
    }

}