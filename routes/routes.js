const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    res.send('main page');
})

router.get('/price', async (req, res) => {
    res.send('price page');
})

router.get('/news', async (req, res) => {
    res.send('news page');
})

router.get('/news', async (req, res) => {
    res.send('news page');
})


module.exports = router