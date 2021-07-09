import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.json({ message: 'aplicativo iniciado com sucesso' });
})

export default routes;