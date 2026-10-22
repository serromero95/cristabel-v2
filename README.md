
# Cristabel de Viaje 2.0 🏔️

Aplicación de comercio electrónico de equipamiento de senderismo, desarrollada como proyecto personal para practicar desarrollo web full-stack.

**Estado:** En desarrollo.

## Demo online

🌐 [Ver aplicación](https://cristabel-frontend.onrender.com/)

La aplicación está desplegada utilizando:
- Render para el frontend React.
- Render para la API Java/Spring Boot.
- Aiven para MySQL.

> Proyecto en desarrollo. Actualmente permite consultar
> el catálogo y las fichas individuales de productos.

## Tecnologías

### Backend
- Java 21
- Spring Boot
- Spring Data JPA / Hibernate
- MySQL
- API REST

### Frontend
- React
- JavaScript
- React Router
- Tailwind CSS
- Vite

## Funcionalidades implementadas

- Catálogo de productos recuperados desde MySQL.
- API REST desarrollada con Spring Boot.
- Consulta de productos por identificador.
- Fichas individuales con imagen, precio y stock.
- Navegación entre páginas mediante React Router.
- Gestión de estados de carga y errores.
- Diseño responsive.

## Arquitectura

El frontend React consume una API REST desarrollada
con Spring Boot.

El backend utiliza Spring Data JPA para acceder
a la base de datos MySQL.

## Estructura del proyecto

- `frontend/` — Aplicación React.
- `backend/` — API REST con Java y Spring Boot.
- `database/` — Script SQL para recrear la base de datos.

## Próximas funcionalidades

- Gestión de productos (CRUD).
- Carrito de compra.
- Autenticación de usuarios.
- Gestión de pedidos.

## Objetivo

Consolidar mis conocimientos de Java, Spring Boot,
bases de datos relacionales y React mediante el
desarrollo progresivo de una aplicación real.