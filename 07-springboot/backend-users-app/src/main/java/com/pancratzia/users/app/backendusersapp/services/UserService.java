package com.pancratzia.users.app.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.pancratzia.users.app.backendusersapp.models.entities.User;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(Long id, User user);

    void remove(Long id);

}
