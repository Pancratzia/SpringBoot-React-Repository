package com.react.backend.cart.app.backendcartapp.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.react.backend.cart.app.backendcartapp.models.entities.Product;
import com.react.backend.cart.app.backendcartapp.repositories.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> findAll() {
        return (List<Product>)repository.findAll();
    }

}
