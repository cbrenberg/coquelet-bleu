const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//TODO: move this route back to /inventory

//GET all roast levels to populate dropdown for customer
router.get('/', (req, res) => {
  console.log('/api/roasts GET hit');
  pool.query(`SELECT * FROM "roast_levels"`)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting roast levels', error);
      res.sendStatus(500);
    })
})

router.get('/:id', (req, res) => {
  console.log('/api/roasts GET hit');
  pool.query(`SELECT * FROM "roast_levels" WHERE "id"=$1;`, [req.params.id])
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting roast levels', error);
      res.sendStatus(500);
    })
})

module.exports = router;