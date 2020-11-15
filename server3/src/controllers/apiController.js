async function login(req, res, next) {
  res.locals.loggedIn = {loggedIn: true};
  return next();
}

async function signup(req, res, next) {
  res.locals.signedUp = {signedUp: true};
  return next();
}

module.exports = {
  login,
  signup,
};
