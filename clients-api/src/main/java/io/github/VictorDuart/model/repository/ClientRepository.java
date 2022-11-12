package io.github.VictorDuart.model.repository;

import io.github.VictorDuart.model.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Integer> {

}
