const models = require('../../models/models');

exports.write = async ctx => {
    console.log(ctx.request.file);
    await models.diary.create(ctx.request.body)
    .then(res => {
        console.log('일기쓰기 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })      
    .catch(err => {
        console.log('[write]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '일기쓰기 실패',
        };
    })
}

exports.diaryList = async ctx => {
    await models.diary.findAll({order: ["uploadDay"]})
    .then(res => {
        console.log('모든일기 찾기 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })      
    .catch(err => {
        console.log('[diaryList]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '모든일기 찾기 실패',
        };
    })
}

exports.myDiaryList = async ctx => {
    await models.diary.findAll({where: {userId: ctx.request.body.userId}})
    .then(res => {
        console.log('내모든일기 찾기 성공\n', res);
        
        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })
    .catch(err => {
        console.log('[myDiaryList]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '내모든일기 찾기 실패',
        };
    })
}