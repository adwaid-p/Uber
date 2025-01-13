const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const mapController = require('../controllers/map.controller')
const {query} = require('express-validator')

router.get('/get-coordinates',
    query('address').isString().withMessage('address is required'),
    authMiddleware.authUser,
    mapController.getCoordinates)
    
router.get('/get-distance-time',
    query('origin').isString().withMessage('origin is required'),
    query('destination').isString().withMessage('destination is required'),
    authMiddleware.authUser,
    mapController.getDistaceTime
)

router.get('/get-suggestions',
    query('input').isString().withMessage('The input should be string'),
    authMiddleware.authUser,
    mapController.getAutoCompleteSuggestions
)

module.exports = router;