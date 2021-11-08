var express = require('express');
const contact = require('../models/Contact')


module.exports.viewContact = async (req, res) => {
    try {
        let limit = req.query.limit ?? '100000000';
        let offset = req.query.position ?? '0';
        limit = parseInt(limit);
        offset = parseInt(offset);
        const contacts = await contact.sortById(limit, offset);
        if (contacts) {
            res.status(200).json({
                data: contacts
            });
        }
        else {
            res.json({
                message: "Can't not find contact"
            })
        }
    } catch (err) {
        console.error(err);
    }
}

module.exports.create = async (req, res) => {
    try {
        const data = await contact.create({
            'name': req.body.name,
            'email': req.body.email,
            'phone': req.body.phone,
            'message': req.body.message,
        });
        res.status(200).json({
            data: data,
            message: 'Contact added successfull'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server error"
        })
    }

}

module.exports.searchName = async (req, res) => {
    let search = req.params.name;
    try {
        const searchName = await contact.searchName(`%${search}%`);
        if(searchName){
            res.status(200).json({
                data: searchName
            });
        }else{
            res.json({
                message: "Can't not find contact"
            })
        }
    }catch(err){
        console.log(err);
    }

}





