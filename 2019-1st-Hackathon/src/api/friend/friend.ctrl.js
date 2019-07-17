const models = require('../../models/models');

exports.follow = async ctx => {
    await models.friend.create(ctx.request.body)
    .then(res => {
        console.log('팔로우 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: '팔로우 성공',
        };
    })      
    .catch(err => {
        console.log('[follow]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '팔로우 실패',
        };
    })
}

exports.unFollow = async ctx => {
    await models.friend.destroy({where: {friendId: ctx.request.body.friendId}})
    .then(res => {
        console.log('언팔로우 성공\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: '언팔로우 성공',
        };
    })      
    .catch(err => {
        console.log('[unfollow]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '언팔로우 실패',
        };
    })
}

exports.followerList = async ctx => {
    await models.friend.findAll({where: {userId: ctx.request.body.userId}})
    .then(res => {
        console.log('팔로우리스트\n', res);

        ctx.status = 200;
        ctx.body = {
            status: 200,
            data: res,
        };
    })      
    .catch(err => {
        console.log('[followerList]오류\n', err);

        ctx.status = 400;
        ctx.body = {
            status: 400,
            data: '팔로우리스트 가져오기 실패',
        };
    })
}