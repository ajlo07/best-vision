const newOrderModel = require("../model/newOrderModel")
const mongoose = require('mongoose')

const new_order = async (req, res) => {
    try {

        const data = req.body;
        const { customerName, customerEyeNumber, glassType, framImage, customerContactNo, framePrice, glassPrice,status } = data;

        if (!data) {
            return res.status(400).send({ status: 0, msg: "Missing required fields" })
        }
        const { left, right } = customerEyeNumber;

        let obj = {
            customerName: customerName,
            customerEyeNumber: { left, right },
            glassType: glassType,
            framImage: framImage,
            customerContactNo: customerContactNo,
            framePrice: framePrice,
            glassPrice:glassPrice,
            totalPrice: framePrice + glassPrice,
            status: status
        }

        let ordercreatedData = await newOrderModel.create(data)
        return res.status(200).send({ status: 1, msg: "order created", data: ordercreatedData })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: 0, msg: "server error" })
    }
}

const getAllOrder = async (req, res) => {
    try {
        const allOrders = await newOrderModel.find();

        return res.status(200).send({ status: 1, msg: "Success", data: allOrders });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 0, msg: "Server error" });
    }
};


module.exports = { new_order, getAllOrder };