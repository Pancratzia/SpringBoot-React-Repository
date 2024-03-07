package com.pancratzia.users.app.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pancratzia.users.app.backendusersapp.models.entities.Role;
import com.pancratzia.users.app.backendusersapp.models.entities.User;
import com.pancratzia.users.app.backendusersapp.models.request.UserRequest;
import com.pancratzia.users.app.backendusersapp.repositories.RoleRepository;
import com.pancratzia.users.app.backendusersapp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public List<User> findAll() {
        return (List<User>) repository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<User> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public User save(User user) {
        String passwordBc = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordBc);

        Optional<Role> o = roleRepository.findByName("ROLE_USER");
        List<Role> roles = new ArrayList<>();
        if(o.isPresent()) {
            roles.add(o.orElseThrow());
        }

        user.setRoles(roles);
        
        return repository.save(user);
    }

    @Override
    @Transactional
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    @Transactional
    public Optional<User> update(Long id, UserRequest user) {

        Optional<User> userOptional = this.findById(id);

        User o = null;
        if (userOptional.isPresent()) {
            User userDB = userOptional.orElseThrow();
            userDB.setUsername(user.getUsername());
            userDB.setEmail(user.getEmail());
            o = this.save(userDB);
        }
        return Optional.ofNullable(o);
    }

}
