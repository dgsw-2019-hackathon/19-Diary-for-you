const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const multer = require('koa-multer');
const bodyParser = require('koa-body')({multipart: true});
const Http = require('http');

const api = require('./api');
const models = require('./models');

const app = new Koa();
const server = Http.createServer(app.callback());
const router = new Router();

router.use(api.routes());

app.use(cors());
app.use(bodyParser);
app.use(router.routes());
app.use(router.allowedMethods());

models.sequelizeInit();

server.listen('3000', () => {
    console.log(`[SERVER] Started Listening on port, 3000`);
});