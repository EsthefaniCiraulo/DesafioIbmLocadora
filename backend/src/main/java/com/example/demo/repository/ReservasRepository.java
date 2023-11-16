package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Reservas;

public interface ReservasRepository extends JpaRepository<Reservas, Integer> {
}
