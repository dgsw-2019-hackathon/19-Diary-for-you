const Router = require('koa-router');
const authMiddleware = require('../../middleware/auth');
const Controller = require('./friend.ctrl');

const router = new Router({ prefix: "/friend" });

router.post('/follow', authMiddleware, Controller.follow);
router.post('/unfollow', authMiddleware, Controller.unFollow);
router.get('/followerList', authMiddleware, Controller.followerList);

module.exports = router;