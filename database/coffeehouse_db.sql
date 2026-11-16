CREATE DATABASE IF NOT EXISTS coffeehouse_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE coffeehouse_db;

CREATE TABLE IF NOT EXISTS nosotros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  historia TEXT NOT NULL,
  direccion VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  url_foto_tienda VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS servicios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL,
  icono VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS especialidades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL,
  imagen_url VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS precios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  producto VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  categoria VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS contactos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO nosotros (historia, direccion, telefono, url_foto_tienda)
SELECT 'Nacimos en Cochabamba con una idea sencilla: crear pausas memorables alrededor de una taza excepcional. Seleccionamos granos, cuidamos cada extracción y abrimos nuestra mesa para la comunidad.', 'Av. Aroma 145, Cochabamba, Bolivia', '+591 4 444 5678', 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg'
WHERE NOT EXISTS (SELECT 1 FROM nosotros);

INSERT INTO servicios (nombre, descripcion, icono)
SELECT 'Café de especialidad', 'Métodos filtrados y espresso preparados al momento.', '☕' WHERE NOT EXISTS (SELECT 1 FROM servicios)
UNION ALL SELECT 'Desayunos artesanales', 'Pastelería fresca y opciones para empezar bien el día.', '🥐' WHERE NOT EXISTS (SELECT 1 FROM servicios)
UNION ALL SELECT 'Para llevar', 'Tu bebida favorita lista para acompañarte.', '🛍️' WHERE NOT EXISTS (SELECT 1 FROM servicios)
UNION ALL SELECT 'Eventos privados', 'Un espacio cálido para reuniones y celebraciones.', '✦' WHERE NOT EXISTS (SELECT 1 FROM servicios);

INSERT INTO especialidades (nombre, descripcion, imagen_url)
SELECT 'Latte de la casa', 'Espresso doble, leche vaporizada y arte en cada taza.', 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg' WHERE NOT EXISTS (SELECT 1 FROM especialidades)
UNION ALL SELECT 'Cold brew cítrico', 'Extracción lenta de 18 horas con un toque de naranja.', 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg' WHERE NOT EXISTS (SELECT 1 FROM especialidades)
UNION ALL SELECT 'Cappuccino clásico', 'Equilibrio perfecto de espresso, leche y espuma.', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg' WHERE NOT EXISTS (SELECT 1 FROM especialidades);

INSERT INTO precios (producto, precio, categoria)
SELECT 'Espresso', 12.00, 'Cafés' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Americano', 15.00, 'Cafés' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Cappuccino', 22.00, 'Cafés' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Latte de la casa', 25.00, 'Cafés' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Cold brew', 24.00, 'Fríos' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Té de temporada', 18.00, 'Infusiones' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Croissant de mantequilla', 16.00, 'Pastelería' WHERE NOT EXISTS (SELECT 1 FROM precios)
UNION ALL SELECT 'Torta del día', 22.00, 'Pastelería' WHERE NOT EXISTS (SELECT 1 FROM precios);
