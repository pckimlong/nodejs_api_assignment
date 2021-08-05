'use strict';

const staff = require('../data/staff');

const getAllStaffList = async (req, res, next) => {
    try {
        const stafflist = await staff.getStaffList();
        res.send(stafflist);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStaffById = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const staffResult = await staff.getStaffById(staffId);
        res.send(staffResult);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const login = async (req, res, next) => {
    try {
        const data = req.body;
        const loginId = await staff.login(data);
        res.send(loginId);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllStaffList,
    getStaffById,
    login
}