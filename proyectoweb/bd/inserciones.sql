-- Insertar datos en tabla tipo_documento
INSERT INTO tipo_documento (t_doc, descripcion_tdoc) VALUES
('CC', 'Cédula de Ciudadanía'),
('CE', 'Cédula de Extranjería'),
('TI', 'Tarjeta de Identidad');

-- Insertar datos en tabla ciudad
INSERT INTO ciudad (id_ciudad, nombre_ciudad, descripcion_ciudad) VALUES
('BOG', 'Bogotá', 'Ciudad capital de Colombia'),
('MED', 'Medellín', 'Segunda ciudad más grande de Colombia'),
('CAL', 'Cali', 'Tercera ciudad más grande de Colombia'),
('BAR', 'Barranquilla', 'Cuarta ciudad'),
('CAR', 'Cartagena', 'Quinta ciudad'),
('STA', 'Santa Marta', 'Sexta ciudad'),
('BUC', 'Bucaramanga', 'Septima'),
('PER', 'Pereira', 'Octava'),
('MAN', 'Manizales', 'Novena'),
('IBA', 'Ibagué', 'Decimo'),
('CUC', 'Cúcuta', 'Decima primera'),
('PAS', 'Pasto', 'Decima segunda'),
('NEI', 'Neiva', 'Decima tercera'),
('VIL', 'Villavicencio', 'Decima cuarta');


-- Insertar datos en tabla usuario
INSERT INTO usuario (tdoc_usuario, id_usuario, p_nombre, s_nombre, p_apellido, s_apellido, correo_us, password_us, num_cel, num_fijo, ciudad_id_ciudad) VALUES
('CC', '1073671257', 'Andre', 'Santiago', 'Nope', 'Pedrasa', 'andre.nope@gmail.com', 'qX5y9P4r','3124325467', '091 23434598', 'MED'),
('TI', '1025486732', 'Luiz', 'Alberto', 'Nope', 'Velazquez', 'luiz.alberto@outlook.com', '7jWcF5rA', '3125765467', '091 23434598', 'CAR'),
('CC', '1097538642', 'Pedro', 'Alfredo', 'González', 'López', 'pedro_gonzalez88@yahoo.com', '3vG9sK6x', '3121234567', '091 98765432', 'BAR'),
('CE', '1003659824', 'Ana', 'Maria', 'Martínez', 'Sánchez', 'ana.martinez88@hotmail.com', 'pB1dC8hF' , '3122345678', '091 87654321', 'BOG'),
('TI', '1082957463', 'Luisa', 'Fernanda', 'Pérez', 'Gómez', 'luisa_f.perez@gmail.com', '6tN7eR2k','3123456789', '091 76543210', 'BOG'),
('CC', '1078159234', 'Carlos', 'Alberto', 'Hernández', 'Ramírez', 'c.ahernandez89@gmail.com', 'mY4sX6qP', '3124567890', '091 65432109', 'STA'),
('CE', '1026975481', 'Laura', 'Sofia', 'López', 'González', 'laura.s.lopez@hotmail.com', '5gV6bZ1f', '3125678901', '091 54321098', 'BUC'),
('TI', '1084736192', 'Roberto', 'Carlos', 'Sánchez', 'Hernández', 'roberto.c.sanchez@gmail.com', '9hA3rC2e', '3126789012', '091 43210987', 'PER'),
('CC', '1098756324', 'María', 'Andrea', 'Gómez', 'Pérez', 'maria.andreagomez@gmail.com', 'dS6wN8vR', '3127890123', '091 32109876', 'CUC'),
('CE', '1009258476', 'Javier', 'Hugo', 'Ramírez', 'López', 'javier_hramirez@protonmail.com', 'jM9pQ2xL', '3128901234', '091 21098765', 'PAS'),
('CC', '1089637452', 'María', NULL, 'Ramírez', 'Vargas', 'maria.ramirez.vargas@gmail.com',  'cX7bA4eV','3209876543', '092 12345678', 'NEI'),
('CC', '1059847236', 'Pedro', 'Alfredo', 'González', 'López', 'pedro_gonzalez_91@gmail.com', '8fG3nB2r', '3121234567', '091 98765432', 'VIL'),
('TI', '1096321874', 'Luis', 'Alberto', 'Hernández', 'Rojas', 'luis.hernandez.rojas@gmail.com', 'tC4eY8sN', '3112345678', '093 34567890', 'CAL'),
('CC', '1065982347', 'Ana', 'Sofía', 'Martínez', 'Gómez', 'ana.sofia.martinez@gmail.com', '1qS5rH9w', '3145678901', '094 56789012', 'MED'),
('CC', '1051234567', 'Carlos', 'Andrés', 'López', NULL, 'carlos.a.lopez@gmail.com', 'bF2kL7mV', '3176543210', '095 43210987', 'MED'),
('CC', '1069812345', 'Laura', NULL, 'García', 'Castro', 'laura.g.castro@gmail.com', '7hE4dY3c', '3198765432', '096 32109876', 'BOG'),
('CC', '1072837465', 'Juan', 'Felipe', 'Herrera', 'Gómez', 'juanfelipe_herrera92@gmail.com', 'rA6vM8pC', '3167890123', '097 65432109', 'IBA'),
('TI', '1012345678', 'Camila', 'Isabella', 'Mendoza', 'Rojas', 'camila.mendoza_94@gmail.com', '2wK6nH3j', '3223456789', '098 76543210', 'PAS'),
('CE', '1023569874', 'David', NULL, 'Pérez', 'González', 'davidpgonzalez_87@gmail.com', 'gB9fV1sT', '3234567890', '099 21098765', 'BAR'),
('CC', '1057891234', 'Sofía', 'Valentina', 'Rojas', 'Hernández', 'sofiav.rojas@live.com', 'zP3xL6bN', '3245678901', '090 87654321', 'BOG');


-- Insertar datos en tabla barbero
INSERT INTO barbero (t_doc_barbero, id_barbero, num_barbero, biografia_barbero)
VALUES ("CC", "1089637452", "3209876543", "Con más de 4 años de experiencia en la elegante barbería The Royal Trim"),
       ("CC", "1059847236", "3145804199", "Con más de 6 años de experiencia en la exclusiva barbería Gentlemen's Haven"),
       ("TI", "1096321874", "3112345678", "Con más de 8 años de experiencia en la renombrada barbería The Barber's Den"),
       ("CC", "1065982347", "3145678901", "Con más de 3 años de experiencia en la prestigiosa barbería The Classic Gents"),
       ("CC", "1051234567", "3176543210", "Con más de 7 años de experiencia en la moderna barbería Urban Cuts & Co"),
       ("CC", "1069812345", "3198765432", "Con más de 2 años de experiencia en la sofisticada barbería Gentleman's Choice"),
       ("CC", "1072837465", "3167890123", "Con más de 9 años de experiencia en la emblemática barbería The Sharp Edge"),
       ("TI", "1012345678", "3223456789", "Con más de 5 años de experiencia en la vanguardista barbería The Modern Man"),
       ("CE", "1023569874", "3234567890", "Con más de 10 años de experiencia en la distinguida barbería The Elite Grooming"),
       ("CC", "1057891234", "3245678901", "Con más de 5 años de experiencia en la reconocida barbería The Gentleman's Cut");



-- Insertar datos en tabla clientes
INSERT INTO clientes (t_doc_cliente, id_cliente, num_cliente) VALUES
('CC', '1073671257', '3124325467'),
('TI', '1025486732', '3125765467'),
('CC', '1097538642', '3121234567'),
('CE', '1003659824', '3122345678'),
('TI', '1082957463', '3123456789'),
('CC', '1078159234', '3124567890'),
('CE', '1026975481', '3125678901'),
('TI', '1084736192', '3126789012'),
('CC', '1098756324', '3127890123'),
('CE', '1009258476', '3128901234');


-- Insertar datos en tabla metodo_de_pago
INSERT INTO metodo_de_pago (id_m_pago, desc_metodo_pago, estado) VALUES
(1, 'Tarjeta de crédito', 1),
(2, 'Efectivo', 1);

-- Insertar datos en tabla barberia
INSERT INTO barberia (id_barberia, nombre_barberia, direccion_barberia, ciudad_id_ciudad) VALUES
("41", "Old Class Barbery", "Carrera 20F #45-12", "BOG"),
("42", "New Styles Barbery", "Avenida 10 #30-45", "MED"),
("43", "The Gentlemen's Cut", "Calle 50 #15-28", "CUC"),
("44", "Vintage Barber Shop", "Transversal 35A #12-50", "CUC"),
("45", "Urban Cuts", "Diagonal 25D #8-60", "BAR"),
("46", "Classic Gents Barberia", "Callejón 12B #5-10", "PER"),
("47", "Modern Style Barber Shop", "Carretera 30E #40-22", "PAS"),
("48", "The Sharp Edge", "Circunvalar 15B #7-33", "NEI"),
("49", "Elegance Barbería", "Vía 5C #18-55", "PER"),
("50", "La Barba Dorada", "Plaza 22 #3-18", "STA");


-- Insertar datos en tabla barbero_barberia
INSERT INTO barbero_barberia (Barbero_id_barbero, Barbero_t_doc_barbero, Barberia_id_barberia) VALUES
("1089637452", "CC", "41"),
("1059847236", "CC", "42"),
("1096321874", "TI", "43"),
("1065982347", "CC", "44"),
("1051234567", "CC", "45"),
("1069812345", "CC", "46"),
("1072837465", "CC", "47"),
("1012345678", "TI", "48"),
("1023569874", "CE", "49"),
("1057891234", "CC", "50");


-- Insertar datos en tabla citas
INSERT INTO citas (id_citas, fecha, costo_servicio, clientes_id_cliente, clientes_t_doc_cliente, metodo_de_pago_id_m_pago) VALUES
("CIT12345", '2023-06-12 10:00:00', 15000, '1073671257', "CC", 1),
("CIT67890", '2023-06-12 12:00:00', 13000, "1025486732", "TI", 1),
("CIT13579", '2023-06-12 13:50:00', 10000, "1097538642", "CC", 2),
("CIT24680", '2023-06-16 9:00:00', 15000, "1003659824", "CE", 2),
("CIT42444", '2023-06-15 8:00:00', 16000, "1082957463", "TI", 1),
("CIT52444", '2023-06-18 7:00:00', 14000, "1078159234", "CC", 1),
("CIT50434", '2023-06-19 15:00:00', 15000, "1026975481", "CE", 2),
("CIT24565", '2023-06-21 13:00:00', 14000, "1084736192", "TI", 2),
("CIT22575", '2023-06-22 12:00:00', 12000, "1098756324", "CC", 2),
("CIT62515", '2023-06-29 10:00:00', 12000, "1009258476", "CE", 1);


-- Insertar datos en tabla citas_domiciliarias
INSERT INTO citas_domiciliarias (fecha_domicilio, costo_tarifa, direccion_lugar, Citas_id_citas, barbero_id_barbero, barbero_t_doc_barbero) VALUES
('2023-06-12 10:00:00', 15000,"Carrera 18 # 45-29", "CIT12345", "1089637452", "CC"),
('2023-06-12 12:00:00', 13000, "Calle 10 # 23A-15", "CIT67890", "1059847236", "CC"),
('2023-06-12 13:50:00', 10.000, "Avenida 5 # 12-40", "CIT13579", "1096321874", "TI"),
('2023-06-16 9:00:00', 15000, "Calle 7B # 32-12", "CIT24680", "1065982347", "CC"),
('2023-06-15 8:00:00', 16000, "Carrera 22 # 8-56", "CIT42444", "1051234567", "CC");


-- Insertar datos en tabla citas_presenciales
INSERT INTO citas_presenciales (fecha_cita, costo_servicio, Barbero_id_barbero, Barbero_t_doc_barbero, Citas_id_citas) VALUES
('2023-06-12 10:00:00', 15000,"1069812345", "CC", "CIT52444"),
('2023-06-12 12:00:00', 13000, "1072837465", "CC", "CIT50434"),
('2023-06-12 13:50:00', 10.000, "1012345678", "TI", "CIT24565"),
('2023-06-16 9:00:00', 15000, "1023569874", "CE", "CIT22575"),
('2023-06-15 8:00:00', 16000, "1057891234", "CC", "CIT62515");