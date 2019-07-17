const Router = require('koa-router');
const multer = require('koa-multer');
const route = require('koa-route');

const router = new Router({ prefix: '/api' });

const registerRouter = require('./register');
const friendRouter = require('./friend');
const diaryRouter = require('./diary');
const commentRouter = require('./comment');
const authRouter = require('./auth');

const routes = [registerRouter, friendRouter, diaryRouter, commentRouter, authRouter];

routes.forEach(route => {
    router.use(route.routes());
    router.use(route.allowedMethods());
});

const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 } });
// router.post('/up', upload.fields([{ name: 'img' }, { name: 'photos' }]), ctx => {
//     console.log(ctx.files);
// });
router.post('/up', upload.single('avatar'));


router.get('/', async ctx => {
    ctx.status = 200;
    ctx.body = {
        status: 200,
        body: '연결 완료',
    };
})

module.exports = router;