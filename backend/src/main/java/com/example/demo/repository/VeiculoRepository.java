package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {


}