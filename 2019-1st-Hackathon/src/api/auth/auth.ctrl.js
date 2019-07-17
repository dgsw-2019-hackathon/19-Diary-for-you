const models = require('../../models/models');
const jwt = require('../../lib/token');

exports.login = async ctx => {
    let req_id = ctx.request.body.id;
    let req_pw = ctx.request.body.password;

    await models.user.findOne({ where:{ id : req_id }})
    .then(async data => {
      const { id } = data;

      if(data === null || data === undefined) {
        console.log("일치하는 회원 아이디가 없습니다");
        let data = {success:false, msg:'로그인 정보가 정확하지 않습니다.'};
        ctx.body = data;
        return;
      }
  
      if(data.password != req_pw) {
        console.log("비밀번호가 올바르지 않습니다.");
        let data = {success:false, msg:'비밀번호가 올바르지 않습니다.'};
        ctx.body = data;
        console.log(ctx.body);
      } else {
        console.log("로그인 성공되었습니다. ID:" + req_id);
        
        const token = await jwt.createToken(id);
        const refreshToken = await jwt.createRefreshToken(id);
        
        ctx.status = 200;
        ctx.body = {
          status: 200,
          data: {
            token,
            refreshToken,
          }
        }
      }
    })
    .catch(err => {
      console.log(`로그인 도중 예상치 못한 오류`, err);
    })

    return;
}