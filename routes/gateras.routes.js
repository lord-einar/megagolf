const {Router} = require('express');
const { gaterasGET } = require('../controllers/gateras.controllers');


const router = Router();

router.get("/", gaterasGET);


module.exports = router;