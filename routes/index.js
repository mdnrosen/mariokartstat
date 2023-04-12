const express = require('express');
const router = express.Router();

const raceController = require('../controllers/raceController')
const viewsController = require('../controllers/viewsController')



router.get('/api/results', raceController.getResults)
router.get('/api/tracks', raceController.getTracks)
router.get('/api/results/wins', raceController.getWins)


router.get('/', 
    viewsController.getHome
)

router.get('/tracks', 
    viewsController.getTrackList
)

router.get('/comps', viewsController.getCompList)
router.get('/comps/:compID', raceController.getAcompetition)
router.get('/:name', raceController.getProfile)


router.get('/tracks/:trackID', raceController.getATrack)
module.exports = router