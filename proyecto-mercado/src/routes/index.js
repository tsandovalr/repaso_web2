const { Router} = require ('express')
const router = Router();

const { renderIndex, renderAbout } = require('../controllers/index')

router.get('/', renderIndex);


module.exports = router