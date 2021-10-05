const upload  = require('../helpers/upload.helper');
const user = require('../models/User');


module.exports.viewUser = async (req, res) => {
    try {
        const users = await user.viewUser();
        if(users){
            res.status(200).json({
                data: users
            });
        }
        else{
            res.json({
                message: "Can't not find food"
            })
        }
    }catch(err) {
        console.error(err);
    }
}

//search User by username
module.exports.findUserName = async (req, res) => {
    const search = req.params.search;
    try{
        const users = await user.findUserName(`%${search}%`);
        // const foods = await food.findFood(`%${search}%`);

        if(users){
            res.status(200).json({
                data: users
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
      console.log(err);
    }
}

//search User by ID
module.exports.findUserID = async (req, res) => {
    const search = req.params.search;
    try{
        const users = await user.findUserID(`${search}`);
        // const foods = await food.findFood(`%${search}%`);
        if(users){
            res.status(200).json({
                data: users
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
      console.log(err);
    }
}

//delete User by id
module.exports.delete= async (req, res) => {
    const id = req.params.id;
    try{
        const users = await user.delete(id);
        res.status(200).json({
            message: 'User delete successfull'
        })
    }catch(err) {
        console.log(err);
    }
}
