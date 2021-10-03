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
            res.status(404).json({
                message: "Can't not find food"
            })
        }
      
    }catch(err) {
        console.error(err);
    }
}
