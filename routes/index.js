var express = require('express');
var router = express.Router();
var houseController = require("../controllers/house")

router.post('/', houseController.create)

router.get('/', houseController.find)

router.put('/:_id', houseController.update)

router.delete('/:_id', houseController.delete)

module.exports = router;
