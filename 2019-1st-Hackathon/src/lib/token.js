require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET: secret } = process.env;

/**
 * @description 토큰 발급
 * @param {String} memberId
 */
exports.createToken = async (userId) => {
    const payload = {
        userId,
    };
    
    const option = {
        expiresIn: '60 days',
        issuer: 'DGSW.HS.KR',
        subject: 'token',
    };

    try {
        const result = await jwt.sign(payload, secret, option);
        console.log(result);
        return result;
    } catch (error) {
        console.log(`[TOKEN] 토큰 발급 중 오류:\n${error}`);
        throw error;
    }
}

exports.createRefreshToken = async (userId) => {
    const payload = {
        userId,
    };

    const option = {
        expiresIn: '30 days',
        issuer: 'DGSW.HS.KR',
        subject: 'refreshToken',
    };

    try {
        const result = await jwt.sign(payload, secret, option);
        return result;
    } catch (error) {
        console.log(`[TOKEN] Refresh Token 발급 중 오류:\n${error}`);
        throw error;
    }
}

exports.verifyToken = async (token) => {
    try {
        const result = await jwt.verify(token, secret);
        console.log();
        return result;
    } catch (error) {
        console.log(`[TOKEN] 토큰 검증 오류 :\n${error}`);
        throw error;
    }
}