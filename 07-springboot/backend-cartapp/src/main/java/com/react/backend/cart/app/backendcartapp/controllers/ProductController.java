package com.react.backend.cart.app.backendcartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.react.backend.cart.app.backendcartapp.models.entities.Product;
import com.react.backend.cart.app.backendcartapp.services.ProductService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> list(){
        return service.findAll();
    }

}
