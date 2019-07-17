const Router = require('koa-router');
const authMiddleware = require('../../middleware/auth');
const Controller = require('./auth.ctrl');

const router = new Router({ prefix: "/auth" });

router.post('/login', Controller.login);

module.exports = router;