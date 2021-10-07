const express = require('express')
const router = express.Router()

//Welcome page
router.get('/', (req, res) => res.render('welcome'))

//Dashboard page
router.get('/dashboard', (req, res) => res.render('dashboard'))
// hello world test for the git 
module.exports = router