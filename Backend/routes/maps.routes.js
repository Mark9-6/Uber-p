const express = require('express')
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const mapController = require('../controllers/map.controller')
const {query} = require('express-validator')



router.get('/get-cordinates',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser,mapController.getCordinates)




module.exports = router 