const Router = require('koa-router');
const path = require('path');
const multer = require('koa-multer');
const authMiddleware = require('../../middleware/auth');
const Controller = require('./diary.ctrl');

const router = new Router({ prefix: "/diary" });

const upload = multer({ dest: 'image/', limits: { fileSize: 1024 * 1024 * 1024 } });

router.post('/write', authMiddleware, upload.single('image'), Controller.write);
router.get('/diaryList', authMiddleware, Controller.diaryList);
router.get('/myDiaryList', authMiddleware, Controller.myDiaryList);

module.exports = router;