package com.cristabeldeviaje.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Optional;


@CrossOrigin(origins = {"http://localhost:5173", "https://cristabel-frontend.onrender.com"})
@RestController
@RequestMapping ("/api/products")
public class ProductController {
    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Product> getProducts() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {

        Optional<Product> result = repository.findById(id);
        
        if(result.isPresent()) {
            return ResponseEntity.ok(result.get());
        }
        
        return ResponseEntity.notFound().build();
    }
}
