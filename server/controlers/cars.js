const CarModel = require('../models/CarModel')

const getCars = (req, res) => {
    try {

        const carsFromDB = await CarModel.find();
        res.status(200).json({cars: carsFromDB})
    }
    catch(error){
        res.status(404).json({message: error.message})
    }
}


const postCar = (req, res) => {
    res.status(200).json('Ateityje idesiu viena masina')
}

const updateCar = (req, res) => {
    res.status(200).json('Ateityje atnaujinsiu viena masina')
}

const deleteCar = (req, res) => {
    res.status(200).json('Ateityje istrinsiu viena masina')
}

module.exports = {

    getCars,
    postCar,
    updateCar,
    deleteCar
}