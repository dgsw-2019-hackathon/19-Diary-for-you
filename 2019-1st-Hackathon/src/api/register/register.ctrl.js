const models = require('../../models/models');

exports.register = async ctx => {
    console.log(ctx.request.body);
    await models.user.create(ctx.request.body)
    .then(res => {
        console.log('유저정보 등록완료\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            body: '가입 완료',
        };
    })
    .catch(err => {
        console.log('[register]Error\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            body: '가입 실패',
        };
    })
}

exports.findId = async ctx => {
    await models.user.findOne({where: {name: ctx.request.body.name}})
    .then(res => {
        console.log('유저아이디 찾기완료\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            body: res.id,
        };
    })
    .catch(err => {
        console.log('[findId]Error\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            body: '아이디 찾기 실패',
        };
    })
}

exports.findPassword = async ctx => {
    await models.user.findOne({where: {id: ctx.request.body.id}})
    .then(res => {
        console.log('유저비밀번호 찾기완료\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            body: res.password,
        };
    })
    .catch(err => {
        console.log('[findId]Error\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            body: '비밀번호 찾기 실패',
        };
    })
}