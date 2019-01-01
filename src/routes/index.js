const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Fazt',
        website: 'faztweb.com'
    };
    res.json(data);
});  

module.exports = router;
