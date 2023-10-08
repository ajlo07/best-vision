const express = require('express');
const {  new_order, getAllOrder } = require('../controller/newOrderController');
const { authenticateToken } = require('../config/authorizationToken');

const router = express.Router();

router.post("/newOrder", authenticateToken, new_order);
router.get("/getAllOrder", authenticateToken, getAllOrder)

module.exports = router