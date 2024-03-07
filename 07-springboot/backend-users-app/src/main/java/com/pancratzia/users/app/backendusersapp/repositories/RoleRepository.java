package com.pancratzia.users.app.backendusersapp.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.pancratzia.users.app.backendusersapp.models.entities.Role;

public interface RoleRepository extends CrudRepository<Role, Long> {


    Optional<Role> findByName(String name);
}
