import express      from 'express';
import path         from 'path';
import handlebars   from 'express-handlebars';
import favicon      from 'serve-favicon';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import logger       from 'morgan';

export default function configureExpress(app) {
    setPort(app);
    setEnv(app);
    setViewEngine(app);
    setFavicon(app);
    setLogger(app);
    setParsers(app);
    setAssetsPath(app);
}

function setPort(app) {
    const defaultPort = 3000;

    app.set('port', process.env.PORT || defaultPort);
}

function setAssetsPath(app) {
    app.use(express.static(path.join(__dirname, '..', 'public')));
}

function setParsers(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(cookieParser());
}

function setLogger(app) {
    app.use(logger('dev'));
}

function setFavicon(app) {
    // do nothing yet
    // app.use(favicon(__dirname + '/public/img/favicon.ico'));
}

function setViewEngine(app) {
    const handlebarsConfig = handlebars({
        defaultLayout: 'main',
        partialsDir: ['views/partials/']
    });

    app.set('views', path.join(__dirname, '..', 'views'));
    app.set('view engine', 'handlebars');
    app.engine('handlebars', handlebarsConfig);
}

function setEnv(app) {
    const env = process.env.NODE_ENV || 'development';

    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';
}
