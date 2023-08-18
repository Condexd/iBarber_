 DROP DATABASE IF EXISTS iBarber;
CREATE DATABASE iBarber;

-- Usar la base de datos creada
USE iBarber;

-- Crear tabla tipo_documento
CREATE TABLE tipo_documento (
  t_doc VARCHAR(5) NOT NULL,
  descripcion_tdoc VARCHAR(25) NOT NULL,
  PRIMARY KEY (t_doc)
);

-- Crear tabla ciudad
CREATE TABLE ciudad (
  id_ciudad VARCHAR(10) NOT NULL,
  nombre_ciudad VARCHAR(20) NOT NULL,
  descripcion_ciudad VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (id_ciudad)
);

-- Crear tabla usuario
CREATE TABLE usuario (
  tdoc_usuario VARCHAR(5) NOT NULL,
  id_usuario VARCHAR(10) NOT NULL,
  p_nombre VARCHAR(20) NOT NULL,
  s_nombre VARCHAR(20) DEFAULT NULL,
  p_apellido VARCHAR(20) NOT NULL,
  s_apellido VARCHAR(20) DEFAULT NULL,
  correo_us VARCHAR(40) DEFAULT NULL,
  password_us VARCHAR(40) NOT NULL,
  num_cel VARCHAR(10) DEFAULT NULL,
  num_fijo VARCHAR(15) DEFAULT NULL,
  ciudad_id_ciudad VARCHAR(10) DEFAULT NULL,
  PRIMARY KEY (id_usuario, tdoc_usuario),
  UNIQUE INDEX correo_us_UNIQUE (correo_us),
  FOREIGN KEY (tdoc_usuario) REFERENCES tipo_documento (t_doc),
  FOREIGN KEY (ciudad_id_ciudad) REFERENCES ciudad (id_ciudad)
);

-- Crear tabla barbero
CREATE TABLE barbero (
  t_doc_barbero VARCHAR(5) NOT NULL,
  id_barbero VARCHAR(10) NOT NULL,
  num_barbero VARCHAR(10) NOT NULL,
  biografia_barbero TEXT DEFAULT NULL,
  PRIMARY KEY (id_barbero, t_doc_barbero),
  FOREIGN KEY (t_doc_barbero, id_barbero) REFERENCES usuario (tdoc_usuario, id_usuario)
);

-- Crear tabla barberia
CREATE TABLE barberia (
  id_barberia INT NOT NULL AUTO_INCREMENT,
  nombre_barberia VARCHAR(40) NOT NULL,
  direccion_barberia VARCHAR(40) NOT NULL,
  ciudad_id_ciudad VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_barberia),
  FOREIGN KEY (ciudad_id_ciudad) REFERENCES ciudad (id_ciudad)
);


-- Crear tabla clientes
CREATE TABLE clientes (
  t_doc_cliente VARCHAR(5) NOT NULL,
  id_cliente VARCHAR(10) NOT NULL,
  num_cliente VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_cliente, t_doc_cliente),
  FOREIGN KEY (t_doc_cliente, id_cliente) REFERENCES usuario (tdoc_usuario, id_usuario)
);

-- Crear tabla metodo_de_pago
CREATE TABLE metodo_de_pago (
  id_m_pago INT NOT NULL,
  desc_metodo_pago VARCHAR(60) NOT NULL,
  estado BOOLEAN NOT NULL,
  PRIMARY KEY (id_m_pago)
);

-- Crear tabla citas
CREATE TABLE citas (
  id_citas VARCHAR(10) NOT NULL,
  fecha DATETIME NOT NULL,
  costo_servicio INT NOT NULL,
  clientes_id_cliente VARCHAR(10) NOT NULL,
  clientes_t_doc_cliente VARCHAR(5) NOT NULL,
  metodo_de_pago_id_m_pago INT NOT NULL,
  PRIMARY KEY (id_citas),
  FOREIGN KEY (clientes_id_cliente, clientes_t_doc_cliente) REFERENCES clientes (id_cliente, t_doc_cliente),
  FOREIGN KEY (metodo_de_pago_id_m_pago) REFERENCES metodo_de_pago (id_m_pago)
);

-- Crear tabla citas_domiciliarias
CREATE TABLE citas_domiciliarias (
  fecha_domicilio DATETIME NOT NULL,
  costo_tarifa INT NOT NULL,
  direccion_lugar VARCHAR(40) NOT NULL,
  Citas_id_citas VARCHAR(10) NOT NULL,
  barbero_id_barbero VARCHAR(10) NOT NULL,
  barbero_t_doc_barbero VARCHAR(5) NOT NULL,
  PRIMARY KEY (Citas_id_citas),
  FOREIGN KEY (Citas_id_citas) REFERENCES citas (id_citas),
  FOREIGN KEY (barbero_id_barbero, barbero_t_doc_barbero) REFERENCES barbero (id_barbero, t_doc_barbero)
);

-- Crear tabla barbero_barberia
CREATE TABLE barbero_barberia (
  Barbero_id_barbero VARCHAR(10) NOT NULL,
  Barbero_t_doc_barbero VARCHAR(5) NOT NULL,
  Barberia_id_barberia INT NOT NULL,
  PRIMARY KEY (Barbero_id_barbero, Barbero_t_doc_barbero, Barberia_id_barberia),
  FOREIGN KEY (Barbero_id_barbero, Barbero_t_doc_barbero) REFERENCES barbero (id_barbero, t_doc_barbero),
  FOREIGN  key(Barberia_id_barberia) REFERENCES barberia(id_barberia)
);


-- Crear tabla citas_presenciales
CREATE TABLE citas_presenciales (
  fecha_cita DATETIME NOT NULL,
  costo_servicio DECIMAL(10, 2) NOT NULL,
  Barbero_id_barbero VARCHAR(10) NOT NULL,
  Barbero_t_doc_barbero VARCHAR(5) NOT NULL,
  Citas_id_citas VARCHAR(10) NOT NULL,
  PRIMARY KEY (Citas_id_citas),
  FOREIGN KEY (Barbero_id_barbero, Barbero_t_doc_barbero) REFERENCES barbero (id_barbero, t_doc_barbero),
  FOREIGN KEY (Citas_id_citas) REFERENCES citas (id_citas)
);