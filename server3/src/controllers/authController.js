async function verify(req, res, next) {
  res.locals.verified = {verified: true};
  return next();
}

async function create(req, res, next) {
  res.locals.created = {created: true};
  return next()
}

module.exports = {
  verify,
  create,
};
