const order = require('../models/Order');

module.exports.viewOrder = async (req, res) => {
    try {
        const orders = await order.viewOrder();
        if(orders){
            res.status(200).json({
                data: orders
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


module.exports.findOrder = async (req, res)=>{
    try{
        const search = req.query.search;
        const orders = await order.findOrder(`%${search}%`);
        if(orders != null){
            res.status(200).json({
                data: orders
            });
        }else{
            res.status(200).json({
                data:[]
            })
        }
    }catch(err) {
        console.error(err);
    }
}