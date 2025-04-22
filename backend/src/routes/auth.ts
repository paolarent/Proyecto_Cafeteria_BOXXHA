import { Request, Response, Router } from "express";

const router = Router();

// Ruta login GET http://localhost:3000/login
router.get('/login', (req:Request, res:Response) => {
    res.send({ data: "LOGIN_PAGE"});
});

export { router };

