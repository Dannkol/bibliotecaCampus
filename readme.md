## Diagrama MER

<img src="./db/Diagrama libros.png" alt="Diagrama">


# API Reference

## publico

### get all autores


```http
  GET /api/autores
```

Responde

```json
{
  "mensaje": "Todos los autores",
  "data": [
    {
      "nombre_completo": "Gabriel García Márquez",
      "nacionalidad": "Colombiano"
    },
    {
      "nombre_completo": "J.K. Rowling",
      "nacionalidad": "Británico"
    },
    {
      "nombre_completo": "Stephen King",
      "nacionalidad": "Estadounidense"
    },
    {
      "nombre_completo": "Isabel Allende",
      "nacionalidad": "Chileno"
    },
    {
      "nombre_completo": "Haruki Murakami",
      "nacionalidad": "Japonés"
    },
    {
      "nombre_completo": "Jane Austen",
      "nacionalidad": "Británico"
    },
    {
      "nombre_completo": "Ernest Hemingway",
      "nacionalidad": "Estadounidense"
    },
    {
      "nombre_completo": "Mario Vargas Llosa",
      "nacionalidad": "Peruano"
    },
    {
      "nombre_completo": "Emily Brontë",
      "nacionalidad": "Británico"
    },
    {
      "nombre_completo": "Leo Tolstoy",
      "nacionalidad": "Ruso"
    }
  ]
}
```

#### Get all categorias

```http
  GET /api/categorias
```


Devuelve

```
{
  "mensaje": "Todas las categorias",
  "data": [
    {
      "nombre": "Novela"
    },
    {
      "nombre": "Poesía"
    },
    {
      "nombre": "Ciencia Ficción"
    },
    {
      "nombre": "Historia"
    },
    {
      "nombre": "Fantasía"
    },
    {
      "nombre": "Biografía"
    },
    {
      "nombre": "Ensayo"
    },
    {
      "nombre": "Drama"
    },
    {
      "nombre": "Aventura"
    },
    {
      "nombre": "Romance"
    }
  ]
}
```

#### Get all editoriales

```http
GET /api/editorial
```


Devuelve

```json
{
  "mensaje": "Todas las editoriales",
  "data": [
    {
      "nombre": "Editorial Alfaguara",
      "direccion": "Calle del Libro, 123"
    },
    {
      "nombre": "Editorial Salamandra",
      "direccion": "Avenida de los Escritores, 456"
    },
    {
      "nombre": "Editorial Anagrama",
      "direccion": "Plaza de la Cultura, 789"
    },
    {
      "nombre": "Editorial Planeta",
      "direccion": "Calle de los Editores, 101"
    },
    {
      "nombre": "Editorial Penguin Random House",
      "direccion": "Avenida de las Letras, 202"
    },
    {
      "nombre": "Editorial RBA Libros",
      "direccion": "Paseo de la Literatura, 303"
    },
    {
      "nombre": "Editorial Tusquets",
      "direccion": "Avenida de los Escritores, 123"
    },
    {
      "nombre": "Editorial Seix Barral",
      "direccion": "Calle del Autor, 404"
    },
    {
      "nombre": "Editorial Galaxia Gutenberg",
      "direccion": "Plaza de los Libros, 505"
    },
    {
      "nombre": "Editorial Sudamericana",
      "direccion": "Avenida de los Escritores, 303"
    }
  ]
}
```

#### Get all libros

```http
GET /api/libros
```


Devuelve

```json
{
  "mensaje": "Todos los libros y sus estados",
  "data": [
    {
      "titulo": "Cien años de soledad",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "It",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "La casa de los espíritus",
      "descripcion": "El libro está en préstamo a un usuario",
      "estado": "Prestado"
    },
    {
      "titulo": "Tokio blues (Norwegian Wood)",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Orgullo y prejuicio",
      "descripcion": "El libro está en préstamo a un usuario",
      "estado": "Prestado"
    },
    {
      "titulo": "El viejo y el mar",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "La ciudad y los perros",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Cumbres borrascosas",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Ana Karenina",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    }
  ]
}
```


#### Get all libros por autor

```http
GET /api/libros/autor/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id del autor |


Devuelve

```json
{
  "mensaje": "Todos los libros y sus estados",
  "data": [
    {
      "titulo": "Cien años de soledad",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "It",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "La casa de los espíritus",
      "descripcion": "El libro está en préstamo a un usuario",
      "estado": "Prestado"
    },
    {
      "titulo": "Tokio blues (Norwegian Wood)",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Orgullo y prejuicio",
      "descripcion": "El libro está en préstamo a un usuario",
      "estado": "Prestado"
    },
    {
      "titulo": "El viejo y el mar",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "La ciudad y los perros",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Cumbres borrascosas",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    },
    {
      "titulo": "Ana Karenina",
      "descripcion": "El libro está disponible para préstamo o reserva",
      "estado": "Disponible"
    }
  ]
}
```

#### Get all libros disponible

```http
GET /api/libros/disponibles
```

Devuelve

```json
{
  "mensaje": "libros disponibles",
  "data": [
    {
      "titulo": "Cien años de soledad",
      "nombre_autor": "Gabriel García Márquez"
    },
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "nombre_autor": "J.K. Rowling"
    },
    {
      "titulo": "It",
      "nombre_autor": "Stephen King"
    },
    {
      "titulo": "Tokio blues (Norwegian Wood)",
      "nombre_autor": "Haruki Murakami"
    },
    {
      "titulo": "El viejo y el mar",
      "nombre_autor": "Ernest Hemingway"
    },
    {
      "titulo": "La ciudad y los perros",
      "nombre_autor": "Mario Vargas Llosa"
    },
    {
      "titulo": "Cumbres borrascosas",
      "nombre_autor": "Emily Brontë"
    },
    {
      "titulo": "Ana Karenina",
      "nombre_autor": "Leo Tolstoy"
    }
  ]
}
```


#### Get all libros prestados

```http
GET /api/libros/prestados
```

Devuelve

```json
{
  "mensaje": "libros Prestado",
  "data": [
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "fecha_devolucion": "2023-07-17T05:00:00.000Z"
    },
    {
      "titulo": "Tokio blues (Norwegian Wood)",
      "fecha_devolucion": "2023-07-18T05:00:00.000Z"
    },
    {
      "titulo": "El viejo y el mar",
      "fecha_devolucion": "2023-07-19T05:00:00.000Z"
    },
    {
      "titulo": "Ana Karenina",
      "fecha_devolucion": "2023-07-20T05:00:00.000Z"
    },
    {
      "titulo": "It",
      "fecha_devolucion": "2023-07-21T05:00:00.000Z"
    },
    {
      "titulo": "La ciudad y los perros",
      "fecha_devolucion": "2023-07-22T05:00:00.000Z"
    },
    {
      "titulo": "La casa de los espíritus",
      "fecha_devolucion": "2023-07-23T05:00:00.000Z"
    },
    {
      "titulo": "Cien años de soledad",
      "fecha_devolucion": "2023-07-24T05:00:00.000Z"
    },
    {
      "titulo": "Cumbres borrascosas",
      "fecha_devolucion": "2023-07-25T05:00:00.000Z"
    },
    {
      "titulo": "Orgullo y prejuicio",
      "fecha_devolucion": "2023-07-26T05:00:00.000Z"
    }
  ]
}
```

#### Get all libros con autor y editorial

```http
GET /api/libros/editorial/autor
```

Devuelve

```json
{
  "mensaje": "Todos los libros, sus autores y editoriales",
  "data": [
    {
      "titulo": "Cien años de soledad",
      "nombre_autor": "Gabriel García Márquez",
      "editorial": "Editorial Alfaguara"
    },
    {
      "titulo": "Harry Potter y la piedra filosofal",
      "nombre_autor": "Gabriel García Márquez",
      "editorial": "Editorial Salamandra"
    },
    {
      "titulo": "It",
      "nombre_autor": "Stephen King",
      "editorial": "Editorial Anagrama"
    },
    {
      "titulo": "La casa de los espíritus",
      "nombre_autor": "Gabriel García Márquez",
      "editorial": "Editorial Planeta"
    },
    {
      "titulo": "Tokio blues (Norwegian Wood)",
      "nombre_autor": "J.K. Rowling",
      "editorial": "Editorial Penguin Random House"
    },
    {
      "titulo": "Orgullo y prejuicio",
      "nombre_autor": "Gabriel García Márquez",
      "editorial": "Editorial Salamandra"
    },
    {
      "titulo": "El viejo y el mar",
      "nombre_autor": "Ernest Hemingway",
      "editorial": "Editorial RBA Libros"
    },
    {
      "titulo": "La ciudad y los perros",
      "nombre_autor": "Jane Austen",
      "editorial": "Editorial Tusquets"
    },
    {
      "titulo": "Cumbres borrascosas",
      "nombre_autor": "J.K. Rowling",
      "editorial": "Editorial Seix Barral"
    },
    {
      "titulo": "Ana Karenina",
      "nombre_autor": "Gabriel García Márquez",
      "editorial": "Editorial Galaxia Gutenberg"
    }
  ]
}
```

#### Get all usuario

```http
GET /api/usuarios
```

Devuelve

```json
{
  "mensaje": "Users",
  "data": [
    {
      "nombre": "Juan",
      "email": "juan.perez@example.com"
    },
    {
      "nombre": "María",
      "email": "maria.gomez@example.com"
    },
    {
      "nombre": "Pedro",
      "email": "pedro.lopez@example.com"
    },
    {
      "nombre": "Laura",
      "email": "laura.hernandez@example.com"
    },
    {
      "nombre": "Carlos",
      "email": "carlos.garcia@example.com"
    },
    {
      "nombre": "Ana",
      "email": "ana.martinez@example.com"
    },
    {
      "nombre": "José",
      "email": "jose.rodriguez@example.com"
    },
    {
      "nombre": "Sofía",
      "email": "sofia.fernandez@example.com"
    },
    {
      "nombre": "Manuel",
      "email": "manuel.torres@example.com"
    },
    {
      "nombre": "Isabel",
      "email": "isabel.diaz@example.com"
    }
  ]
}
```

### Autenticacion

#### post Token

```http
POST /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. |
| `tel`      | `string` | **Required**. |

Request

```json
{
  "email": "juan.perez@example.com",
  "tel": "+1234567890"
}
```

Responde

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkwMjA4Njc1LCJleHAiOjE2OTAyMTIyNzV9.HezpaSEz7KoogRkua-bSRAx3q-lfkZ7UjSqAjOJb6bc"
}
```

#### Get prestamo de un usuario

```http
GET /api/auth/prestamos
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api-key`      | `string` | **Required**. |

Responde

```josn
{
  "mensaje": "Prestamos",
  "data": [
    {
      "fecha_prestamo": "2023-07-10T05:00:00.000Z",
      "fecha_devolucion": "2023-07-17T05:00:00.000Z",
      "estado": "Devuelto"
    }
  ]
}
```
#### Get prestamo de un usuario

```http
GET /api/auth/reserva
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api-key`      | `string` | **Required**. |

Responde

```josn
{
  "mensaje": "Reserva",
  "data": [
    {
      "fecha_reserva": "2023-07-10T05:00:00.000Z",
      "estado": "Confirmada"
    }
  ]
}
```

## 🛠 Tecnologias
Node, Express, Mysql

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://dannkol.github.io/portafolios/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/daniel-manosalva-000b98242)
