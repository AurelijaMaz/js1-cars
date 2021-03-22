const mongoose = require('mongoose');
const CarModel = require('../models/CarModel')

const getCars = async (req, res) => {
    try {

        const carsFromDB = await CarModel.find();
        res.status(200).json({ cars: carsFromDB })
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}


const postCar = async (req, res) => {
    const { brand, model, year, engineVolume } = req.body;
    try {

        const newCar = await CarModel.create({ brand, model, year, engineVolume });
        res.status(200).json({
            car: {
                id: newCar._id,
                brand: newCar.brand,
                model: newCar.model,
                year: newCar.year,
                engineValume: newCar.engineVolume
            }
        });

    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const updateCar = (req, res) => {
    res.status(200).json('Ateityje atnaujinsiu viena masina')
}

const deleteCar = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id))
            throw new Error(`Neteisingas id ${id}`)
        const deletedCar = await CarModel.findByIdAndDelete(id)
        if (deletedCar === null)
            throw new Error(`Nepavyko rasti ir istrinti masinos su id ${id}`)
        res.status(200).json(
            {
                car: {
                    id: deletedCar._id,
                    brand: deletedCar.brand,
                    model: deletedCar.model,
                    year: deletedCar.year,
                    engineValume: deletedCar.engineVolume
                }
            })
    }

    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = {

    getCars,
    postCar,
    updateCar,
    deleteCar
}