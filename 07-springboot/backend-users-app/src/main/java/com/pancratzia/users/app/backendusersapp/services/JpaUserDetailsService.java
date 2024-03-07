package com.pancratzia.users.app.backendusersapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pancratzia.users.app.backendusersapp.repositories.UserRepository;



@Service
public class JpaUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository repository;
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<com.pancratzia.users.app.backendusersapp.models.entities.User> o = repository.findByUsername(username);

        if (o.isEmpty()) {
            throw new UsernameNotFoundException("Username %s no existe en el sistema".formatted(username));
        }

        com.pancratzia.users.app.backendusersapp.models.entities.User user = o.orElseThrow();

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        return new User(user.getUsername(), user.getPassword(), true, true, true, true, authorities);
    }

}
