package com.react.backend.cart.app.backendcartapp.repositories;
import org.springframework.data.repository.CrudRepository;
import com.react.backend.cart.app.backendcartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
}