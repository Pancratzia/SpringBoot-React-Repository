package com.pancratzia.users.app.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.pancratzia.users.app.backendusersapp.models.entities.User;
import com.pancratzia.users.app.backendusersapp.models.request.UserRequest;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Long id);

    User save(User user);

    Optional<User> update(Long id, UserRequest user);

    void remove(Long id);

}
