const express = require('express');
const {upload} = require('../helpers/helper');
const {singleFileUpload, displayData, deleteUser} = require('../controllers/controller');

const router = express.Router();

/**
 *  @description Root Route
 *  @method POST /singleFile
 */
router.post('/singleFile', upload.single('file'), singleFileUpload);
/**
 *  @description DisplayData Route
 *  @method GET /displayData
 */
router.get('/displayData', displayData)

// API

// Delete User with given ID
router.post('/deleteUser/:id', deleteUser);

module.exports = router