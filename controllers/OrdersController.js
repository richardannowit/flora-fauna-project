const order = require('../models/Order');

module.exports.viewOrder = async (req, res) => {
    try {
        let limit = req.query.limit ?? '100000000';
        let offset = req.query.position ?? '0';
        limit = parseInt(limit);
        offset = parseInt(offset);
        const orders = await order.viewOrder(limit, offset);
        if (orders) {
            res.status(200).json({
                data: orders
            });
        }
        else {
            res.json({
                message: "Can't not find order"
            })
        }

    } catch (err) {
        console.error(err);
    }
}


module.exports.findOrder = async (req, res) => {
    try {
        const search = req.params.search;
        const orders = await order.findOrder(`%${search}%`);
        if (orders != null) {
            res.status(200).json({
                data: orders
            });
        } else {
            res.status(200).json({
                data: []
            })
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports.statistical = async (req, res) => {
    try {
        const array = [];
        const year = req.params.year;
        for (let i = 1; i <= 12; i++) {
            const result = await order.statistical(year, i);
            let temp = Object.values(result);
            array.push(...temp);
            // array.push(result);

        }
        array.forEach(function (part, index) {
            if (array[index] == null) {
                array[index] = 0;
            }
        });

        if (array.length > 0) {
            res.status(200).json({
                data: array
            });
        } else {
            data: [];
        }
    } catch (err) {
        console.error(err);
    }
}


module.exports.create = async (req, res) => {
    try {
        const data = await order.create({
            'food_id': parseInt(req.body.food_id),
            'quantity': parseInt(req.body.quantity),
            'customer_name': req.body.customer_name,
            'customer_phone_number': req.body.customer_phone_number,
            'customer_email': req.body.customer_email,
            'customer_address': req.body.customer_address,
        });
        res.status(200).json({
            data: data,
            message: 'Order added successfull'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        })
    }

}