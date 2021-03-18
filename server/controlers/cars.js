

const getCars = (req, res) => {
    res.status(200).json('Ateityje grazinsiu masinas')
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