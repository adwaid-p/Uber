const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage("Firstname must be atleast 3 charecter long"),
    body('password')
      .isLength({ min: 6 })
      .withMessage("Password must be atleast 6 character long"),
    body('vehicle.color')
      .isLength({ min: 3 })
      .withMessage("Color must be atleast 3 charecter long"),
    body('vehicle.plate')
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 charecter long"),
    body('vehicle.capacity')
      .isInt({ min: 3 })
      .withMessage("Capacity must be atleast 3 charecter long"),
    body('vehicle.vehicleType')
        .isIn(['motorcycle','car','auto'])
        .withMessage('Invalid Vehicle Type')
],captainController.registerCaptain);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:6}).withMessage('Password must be atleast 6 character long')
], captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;