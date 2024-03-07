package com.pancratzia.users.app.backendusersapp.models.dto.mapper;

import com.pancratzia.users.app.backendusersapp.models.dto.UserDto;
import com.pancratzia.users.app.backendusersapp.models.entities.User;

public class DtoMapperUser {

    private static DtoMapperUser mapper;

    private User user;

    private DtoMapperUser() {}

    public static DtoMapperUser builder() {
        mapper = new DtoMapperUser();
        return mapper;
    }

    public DtoMapperUser setUser (User user) {
        this.user = user;
        return mapper;
    }

    public UserDto build(){
        if(user == null){
            throw new RuntimeException("Entity User is null");
        }
        return new UserDto(this.user.getId(), this.user.getUsername(), this.user.getEmail());

    }
}
