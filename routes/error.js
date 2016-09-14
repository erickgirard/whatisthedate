import express from 'express';

const app = express();

export default function errorHandler(err, req, res, next) {
    let stacktraces = {};
    if (app.get('env') === 'development') {
        stacktraces = err;
    }

    res.status(err.status || 500);

    res.render('error', {
        message: err.message,
        error: stacktraces,
        title: 'error'
    });
}