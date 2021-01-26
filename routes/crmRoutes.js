var express = require('express');
var router = express.Router();
const { addItem,
  deleteItem,
  getAllItems,} = require('../controller/itemControllers')

/* GET home page. */
router.route('/').get(getAllItems)
.post(addItem)
.delete(deleteItem)


module.exports = router;
