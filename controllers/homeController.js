const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('pages/index.ejs')
})

router.get('/resume', (req, res) =>{
    res.render('pages/resume.ejs')
})

router.get('/bio', (req, res) =>{
    res.render('pages/bio.ejs')
})

router.get('/projects', (req, res) =>{
    res.render('pages/projects.ejs')
})

module.exports = router;