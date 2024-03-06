package com.pancratzia.users.app.backendusersapp.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.pancratzia.users.app.backendusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {


    Optional<User> findByUsername(String username); //Metodo 1

    @Query("SELECT u FROM User u WHERE u.username = ?1")
    Optional<User> getUserByUsername(String username); //Metodo 2
}
