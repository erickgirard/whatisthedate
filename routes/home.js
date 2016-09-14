import { Router }   from 'express';

const route = Router();

route.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

export default route;
