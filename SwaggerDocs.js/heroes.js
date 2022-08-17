/**
 * @swagger
 * tags:
 *   name: Heroes
 *   description: Hero list management API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Hero:
 *       type: object
 *       required:
 *         - avatar
 *         - nickName
 *         - originName
 *         - originDescription
 *         - superPowers
 *         - catchPhrase
 *         - images
 *       properties:
 *         avatar:
 *           type: String
 *         nickName:
 *           type: String
 *         originName:
 *           type: String
 *         originDescription:
 *           type: String
 *         superPowers:
 *           type: String
 *         catchPhrase:
 *           type: String
 *         images:
 *           type: Object
 */

/**
 * @swagger
 * /api/heroes:
 *  get:
 *     security:
 *      - bearerAuth: []
 *     summary: Get all Super heroes
 *     tags: [Heroes]
 *     responses:
 *       204:
 *         description: The user was successfully log out.
 *       401:
 *         description: The user is not authorized or Missing header with authorization token.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /api/heroes:
 *   post:
 *     summary: Create a new hero
 *     tags: [Heroes]
 *     requestBody:
 *       required: true
 *       description: Registration's object
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *              - nickName
 *              - originName
 *              - originDescription
 *              - superPowers
 *              - catchPhrase
 *             properties:
 *              nickName:
 *                type: String
 *              originName:
 *                type: String
 *              originDescription:
 *                type: String
 *              superPowers:
 *                type: String
 *              catchPhrase:
 *                type: String
 *     responses:
 *       201:
 *         description: The user was successfully created.
 *       400:
 *         description: Missing some field.
 *       409:
 *         description: The user with this email already registered.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /api/heroes/{id}:
 *   put:
 *     summary: Changing the data of the hero
 *     tags: [Heroes]
 *     parameters:
 *       - name: id
 *         required: true
 *         in: path
 *         description: Hero id for change
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *          schema:
 *            required:
 *              - nickName
 *              - originName
 *              - originDescription
 *              - superPowers
 *              - catchPhrase
 *             properties:
 *              nickName:
 *                type: String
 *              originName:
 *                type: String
 *              originDescription:
 *                type: String
 *              superPowers:
 *                type: String
 *              catchPhrase:
 *                type: String
 *     responses:
 *       204:
 *         description: Product is deleted
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */

/**
 * @swagger
 * /api/heroes/{id}:
 *   delete:
 *     summary: Delete the Hero by id
 *     tags: [Heroes]
 *     parameters:
 *       - name: id
 *         required: true
 *         in: path
 *         description: Hero id for change
 *     responses:
 *       204:
 *         description: Product is deleted
 *       400:
 *         description: Some bad request.
 *       500:
 *         description: Some server error.
 */
