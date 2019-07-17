const Router = require('koa-router');
const authMiddleware = require('../../middleware/auth');
const Controller = require('./register.ctrl');

const router = new Router({ prefix: "/register" });

router.post('/register', Controller.register);
router.post('/findId', Controller.findId);
router.post('/findPassword', Controller.findPassword);

module.exports = router;