const express = require('express');
const router = express.Router();
const userLookUp = require('../controllers/userLookUp');

router.get('/', userLookUp.userLookUp, (req, res) => {
  console.log(res.data)
  res.status(200).json(res.data);
});
module.exports = router;
