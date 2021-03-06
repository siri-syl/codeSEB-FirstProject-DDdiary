const { users } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const isAuth = (req, res, next) => {
const token = req.cookies['jwt'];
if (!token) {
    return res.status(401).json({ "message": "not authorized" });
}
try {
    jwt.verify(token, process.env.ACCESS_SECRET , async (err, encoded) => {
    if (err) {
        return res.status(401).json({ "message": "not authorized" });
    }
    const usersInfo = await users.findOne({ where: { id: encoded.id } });
    if (!usersInfo) {
        return res.status(401).json({ "message": "not authorized" });
    }
    req.userId = encoded.id;
    return next();
    });
} catch (error) {
    console.log(error);
    return res.status(500).json({ "message": "Server Error" });
    }
};

module.exports = isAuth;