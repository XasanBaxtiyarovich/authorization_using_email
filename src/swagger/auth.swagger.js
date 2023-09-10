/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registration using email.
 *     tags: [Auth]
 *     description: Registration using email.
 *     requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 email:
 *                   example: jondoe@gmail.com
 *                   type: string
 *                   required: true
 *                 password:
 *                   type: string
 *                   example: 123321
 *                   required: true
 *     responses:
 *       201:
 *         description: Code sent to email.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Verification code sent is your mail
 * 
 * /api/auth/register/createOTP:
 *   post:
 *     summary: Enter the verification code 
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 otp:
 *                   type: string
 *                   example: 123456
 *     responses:
 *       200:
 *         description: Success, created user.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 token:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 * 
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 email:
 *                    type: string
 *                    example: jondoe@gmail.com
 *                 password:
 *                   type: string
 *                   example: 123321
 *     responses:
 *       200:
 *         description: Success, login user.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Success
 *                 token:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 */