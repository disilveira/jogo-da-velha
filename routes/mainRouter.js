'use strict';

const { Router } = require('express');
const mainController = require('../controllers/mainController');

const router = Router();

router.post('/game', mainController.newGame);
router.post('/game/:id/movement', mainController.doMovement);

module.exports = router;