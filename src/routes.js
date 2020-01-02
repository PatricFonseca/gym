import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'Patric',
      email: 'patric.ccomp@gmail.com',
      password_hash: 'osjdHash',
    });
    return res.json({ user });
  } catch (error) {
    console.log('Ops, ocorreu um erro', error);
  }
});

export default routes;
