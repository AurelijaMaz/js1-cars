const  { Router } = require('express');
const {
    getCars,
    postCar,
    updateCar,
    deleteCar
} = require('../controlers/cars')

const router = Router();

router.get('/', getCars);

router.post('/', postCar);

router.patch('/', updateCar);

router.delete('/', deleteCar);

module.exports = router;