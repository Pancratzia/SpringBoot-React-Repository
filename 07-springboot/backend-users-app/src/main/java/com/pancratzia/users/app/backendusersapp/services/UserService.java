package com.pancratzia.users.app.backendusersapp.services;

import java.util.List;
import java.util.Optional;

import com.pancratzia.users.app.backendusersapp.models.dto.UserDto;
import com.pancratzia.users.app.backendusersapp.models.entities.User;
import com.pancratzia.users.app.backendusersapp.models.request.UserRequest;

public interface UserService {

    List<UserDto> findAll();

    Optional<UserDto> findById(Long id);

    UserDto save(User user);

    Optional<UserDto> update(Long id, UserRequest user);

    void remove(Long id);

}
