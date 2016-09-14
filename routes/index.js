import { Router } from 'express';

import home       from './home';
import users      from './user';
import notFound   from './notfound';
import error      from './error';

const router = Router();

router.use('/', home);
router.use('/users', users);
router.use(notFound);
router.use(error);

export default router;