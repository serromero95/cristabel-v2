package com.cristabeldeviaje.backend;

import java.math.BigDecimal;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "price", nullable = false)
    private BigDecimal price;

    @Column(name = "stock", nullable = false)
    private int stock;

    @Column(name = "image_url")
    private String imageUrl;

    public Product(String name, BigDecimal price, int stock) {
        if (price == null || price.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("El precio debe ser superior a cero.");
        }
        if (stock < 0) {
            throw new IllegalArgumentException("El stock no puede ser negativo");
        }
        if (name == null || name.isBlank() || name.length() < 3) {
            throw new IllegalArgumentException("Nombre no válido. Introduce al menos 3 caracteres.");
        }
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    protected Product() {
    }

    @Override
    public String toString() {
        return "ID: " + id + "\nNombre: " + name + "\nPrecio: " + price + "\nStock: " + stock;
    }

    public String sellProduct(int cantidad) {
        if (cantidad <= 0) {
            return "La cantidad debe ser mayor que cero";
        }
        if (cantidad > stock) {
            return "No hay suficiente stock para ejecutar la venta.";
        }
        stock -= cantidad;
        return "Venta completada con éxito";
    }

    public int getStock() {
        return stock;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public String reponerUnidades(int cantidad) {
        if (cantidad <= 0) {
            return "La cantidad debe ser mayor que cero.";
        }
        stock += cantidad;
        return "Stock repuesto con éxito.";
    }

    public BigDecimal stockValue() {
        return price.multiply(BigDecimal.valueOf(stock));
    }

}
