const Router = require('koa-router');
const authMiddleware = require('../../middleware/auth');
const Controller = require('./comment.ctrl');

const router = new Router({ prefix: "/comment" });

router.post('/createComment', authMiddleware, Controller.createCommnet);
router.get('/reportComment', authMiddleware, Controller.reportComment);
router.get('/deleteComment', authMiddleware, Controller.deleteComment);

module.exports = router;