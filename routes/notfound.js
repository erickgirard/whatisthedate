/// catch 404 and forward to error handler

export default function notFound(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;

    next(err);
};