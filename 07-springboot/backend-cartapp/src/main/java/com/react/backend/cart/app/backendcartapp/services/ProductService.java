package com.react.backend.cart.app.backendcartapp.services;
import java.util.List;
import com.react.backend.cart.app.backendcartapp.models.entities.Product;

public interface ProductService {
    List<Product> findAll();
}
