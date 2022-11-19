package io.github.VictorDuart.model.repository;

import io.github.VictorDuart.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
