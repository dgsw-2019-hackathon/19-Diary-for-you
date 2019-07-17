const models = require('../../models/models');

exports.createCommnet = async ctx => {
    await models.comment.create(ctx.request.body)
    .then(res => {
        console.log('댓글달기 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })      
    .catch(err => {
        console.log('[createComment]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '댓글달기 실패',
        };
    })
}

exports.reportComment = async ctx => {
    console.log(ctx.request.query);
    const { id } = ctx.request.query;
    await models.comment.update({report: true}, {where: {id: id}})
    .then(res => {
        console.log('댓글신고 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })      
    .catch(err => {
        console.log('[reportComment]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '댓글신고 실패',
        };
    })
}

exports.deleteComment = async ctx => {
    const { id } = ctx.request.query
    await models.comment.destroy({where: {id: id}})
    .then(res => {
        console.log('댓글삭제 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: '댓글삭제 성공',
        };
    })      
    .catch(err => {
        console.log('[deleteComment]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '댓글삭제 실패',
        };
    })
}