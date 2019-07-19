class RequestService {
  static parseQuery(req, res, next) {
    const limit = parseInt(req.query.limit, 10);
    req.limit = (limit > process.env.LIMIT_MIN && limit < process.env.LIMIT_MAX)
      ? limit : process.env.LIMIT_DEFAULT;

    const offset = parseInt(req.query.offset, 10);
    req.offset = (offset > process.env.OFFSET_MIN)
      ? offset : process.env.OFFSET_DEFAULT;
    next();
  }
}

module.exports = RequestService;
