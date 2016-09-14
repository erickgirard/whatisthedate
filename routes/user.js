import { Router } from 'express';

const route = Router();

route.get('/', function(req, res) {
  res.send('respond with a resource');
});

export default route;
