const { connection } = require("../config/database");
var UserModel = require("../models/User")



let index = async (req, res) => {
    let user = await UserModel.findUser("namvt002");
    res.status(200).json({
        data: user
    });
}

module.exports = {
    index
}