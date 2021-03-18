const  { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Ateityje grazinsiu masinas')
});

router.post('/', (req, res) => {
    res.send('Ateityje grazinsiu masinas')
});

router.patch('/', (req, res) => {
    res.send('Ateityje grazinsiu masinas')
});

router.delete('/', (req, res) => {
    res.send('Ateityje grazinsiu masinas')
});

module.exports = router;