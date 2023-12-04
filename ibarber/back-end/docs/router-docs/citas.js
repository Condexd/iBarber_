const swaggerDocument = `
/**
 * @swagger
 * tags:
 *   name: Citas
 *   description: Endpoints para gestionar citas.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cita:
 *       type: object
 *       properties:
 *         cliente:
 *           type: string
 *           description: ID del cliente para la cita.
 *         barbero:
 *           type: string
 *           description: ID del barbero para la cita.
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha y hora de la cita.
 */

/**
 * @swagger
 * /api/citas/{usuario}:
 *   get:
 *     summary: Obtener citas de un usuario.
 *     description: Obtiene las citas de un usuario (cliente o barbero) por su ID de usuario.
 *     parameters:
 *       - in: path
 *         name: usuario
 *         required: true
 *         description: ID del usuario del cual se desean obtener las citas.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cita encontrada. Devuelve las citas correspondientes al usuario.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       '404':
 *         description: No se encontraron citas para el usuario.
 *       '500':
 *         description: Error al obtener las citas.
 */

/**
 * @swagger
 * /api/citas/{id}:
 *   get:
 *     summary: Obtener una cita por su ID.
 *     description: Obtiene una cita por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita que se desea obtener.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cita encontrada. Devuelve la cita correspondiente al ID proporcionado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       '404':
 *         description: La cita no fue encontrada.
 *       '500':
 *         description: Error al obtener la cita.
 */

/**
 * @swagger
 * /api/citas:
 *   post:
 *     summary: Crear una nueva cita.
 *     description: Crea una nueva cita con la información proporcionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       '201':
 *         description: Cita creada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       '404':
 *         description: Barbero no encontrado o no disponible.
 *       '500':
 *         description: Error al crear la cita.
 */

/**
 * @swagger
 * /api/citas/{id}:
 *   put:
 *     summary: Actualizar una cita existente.
 *     description: Actualiza una cita existente con la información proporcionada.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita que se desea actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cita'
 *     responses:
 *       '200':
 *         description: Cita actualizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cita'
 *       '404':
 *         description: La cita no fue encontrada o el barbero no existe.
 *       '500':
 *         description: Error al actualizar la cita.
 */

/**
 * @swagger
 * /api/citas/{id}:
 *   delete:
 *     summary: Eliminar una cita existente.
 *     description: Elimina una cita existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita que se desea eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Cita eliminada correctamente.
 *       '404':
 *         description: La cita no fue encontrada.
 *       '500':
 *         description: Error al eliminar la cita.
 */
`;

export default swaggerDocument;