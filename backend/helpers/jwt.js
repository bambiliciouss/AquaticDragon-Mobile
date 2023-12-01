// const expressjwt = require('express-jwt');
const { expressjwt: jwt } = require("express-jwt");
function authJwt() {
  const secret = process.env.secret;
  const api = process.env.API_URL;
  return jwt({
    secret,
    algorithms: ["HS256"],
    // isRevoked: isRevoked
  }).unless({
    path: [
      {
        url: /\/api\/v1\/gallon(.*)/,
        methods: ["GET", "POST", "PUT", "OPTIONS"],
      },
      {
        url: /\/api\/v1\/supplier(.*)/,
        methods: ["GET", "POST", "PUT", "OPTIONS"],
      },

      { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
      {
        url: /\/api\/v1\/orders(.*)/,
        methods: ["GET", "POST", "PUT", "OPTIONS"],
      },
      { url: /\/public\/uploads(.*)/, methods: ["GET", "OPTIONS", "POST"] },
      `${api}/users`,
      `${api}/users/login`,
      `${api}/users/register`,
      `${api}/gallon/registergallons`,
      `${api}/supplier/registersupplierbranch`,
      

    ],
  });
}

async function isRevoked(req, payload, done) {
  if (!payload.isAdmin) {
    done(null, true);
  }

  done();
}

module.exports = authJwt;
