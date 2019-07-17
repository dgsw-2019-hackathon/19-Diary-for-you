const tokenLib = require('../lib/token');
const models = require('../models/models');

module.exports = async (ctx, next) => {
    const { token } = ctx.request.header;
    if(!token) {
        ctx.status = 403;
        ctx.body = {
            status: 403,
            message: '토큰을 전송해주세요, 당신은 누구입니까?',
        };
    }
    console.log(`start decoded`);
    let decoded = await tokenLib.verifyToken(token);
    if(!decoded) {
        ctx.body = {
            status: 403,
            message: '토큰 정보가 undefinded or null 입니다.',
        };

        return;
    } else {
        models.user.findOne({where: { id: decoded.userId }})
        .then(user => {
            ctx.request.user = user;
        })
        .catch(err => {
            console.log(`TOKEN멤버 조회불가\n${err}`);
        })
    }

    await next();
};