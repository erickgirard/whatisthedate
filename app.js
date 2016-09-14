import express          from 'express';
import configureExpress from './config';
import routes           from './routes';

let app = express();

configureExpress(app);

app.use(routes);

function onServerStarted() {
  console.log(`Express server listening on port ${server.address().port}`);
}

const server = app.listen(app.get('port'), onServerStarted);

export default app;