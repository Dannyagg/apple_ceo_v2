const express = require('express');
const router = express.Router();
const ExecutiveModel = require('../model/ExecutiveModel');

router.get('/', async(req, res) => {
    const ceosData = await ExecutiveModel.getAllExecutiveData();
    
    res.render('template', {
        locals: {
            title: 'Apple CEOs',
            data: ceosData
        },
        partials: {
            body: 'partials/home'
        }
    })
})

module.exports = router;