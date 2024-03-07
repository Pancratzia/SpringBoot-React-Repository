package com.pancratzia.users.app.backendusersapp.auth;

import java.security.Key;

import io.jsonwebtoken.Jwts;

public class TokenJwtConfig {

    public final static Key SECRET_KEY = Jwts.SIG.HS256.key().build();;
    public final static String PREFIX_TOKEN = "Bearer ";
    public final static String HEADER_AUTHORIZATION = "Authorization";
}
