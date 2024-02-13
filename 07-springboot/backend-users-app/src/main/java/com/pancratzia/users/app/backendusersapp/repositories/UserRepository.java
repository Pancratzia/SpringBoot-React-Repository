package com.pancratzia.users.app.backendusersapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.pancratzia.users.app.backendusersapp.models.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
