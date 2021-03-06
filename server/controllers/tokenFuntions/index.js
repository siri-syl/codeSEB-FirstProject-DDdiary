require('dotenv').config()
const { sign } = require('jsonwebtoken');
const DOMAIN = process.env.DOMAIN || 'localhost'

module.exports = {
    generateAccessToken: (data) => {

    let Access = sign(data, process.env.ACCESS_SECRET, { expiresIn:'2d'})
    
    return Access
    
    },
    sendAccessToken: (res, token, userData) => {
        userData = userData || {data: null}

    res.status(200).cookie("jwt", token,{
        domain: DOMAIN,
        path: '/',
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    }).json(userData);
    return ;
    }
};