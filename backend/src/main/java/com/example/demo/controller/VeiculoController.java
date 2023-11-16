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
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.model.Veiculo;
import com.example.demo.repository.VeiculoRepository;
import com.example.demo.service.VeiculoService;

import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/veiculos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VeiculoController {
    
    @Autowired
    private VeiculoService veiculoService;
    
    @GetMapping
    public ResponseEntity<List<Veiculo>> getAll(){
        return ResponseEntity.ok(veiculoService.buscarTodos());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id){
    	Optional<Veiculo> veiculo = veiculoService.buscaPorId(id);
    	if(veiculo!=null) {
    		return ResponseEntity.status(200).body(veiculo);
    	}
    	
    	return ResponseEntity.status(404).body("Nenhum Veiculo Encontrado");
    	
    }
    
    @PostMapping
    public ResponseEntity post(@Valid @RequestBody Veiculo veiculo){
    	veiculoService.inserirAlterarVeiculo(veiculo);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(veiculo);
    }
    
    @PutMapping
    public ResponseEntity put(@Valid @RequestBody Veiculo veiculo){
    	if(veiculo.getId()!=null) {
    		veiculoService.inserirAlterarVeiculo(veiculo);
    		return ResponseEntity.status(200).body(veiculo);
    	}else {
    		return ResponseEntity.status(500).body("Erro ao alterar Veículo");
    	}
    }
    
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
    	veiculoService.apagarVeiculo(id);
    	return ResponseEntity.status(200).body(id);
    }

}