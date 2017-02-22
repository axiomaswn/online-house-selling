var express = require('express');
var router = express.Router();
var houseController = require("../controllers/house")

router.post('/', houseController.create)

router.get('/', houseController.find)

router.put('/:id', houseController.update)

router.delete('/:id', houseController.delete)

module.exports = router;
