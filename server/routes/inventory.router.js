const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

//TODO: Change all bean routes to /api/inventory/beans

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  pool.query(`INSERT INTO "beans" ("name", "origin_description", "flavor_description", "image_url", "quantity", "notes")
              VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id";`,
              [req.body.name, req.body.origin_description, req.body.flavor_description, req.body.image_url, req.body.quantity, req.body.notes])
    .then((results) => {
      console.log('back from /api/inventory with results=', results.rows[0])
      res.send(results.rows[0]);
    })
    .catch(error => {
      console.log('Error submitting order', error);
      res.sendStatus(500);
    })
})

router.post('/roasts', (req, res) => {
  const values = Object.keys(req.body.roasts).filter(item => req.body.roasts[item] === true).map(item => `(${req.body.id}, ${item})`).join(',');
  console.log('/api/inventory/roasts post values:', values)
  pool.query(`INSERT INTO "roast_junction" ("bean_id", "roast_id")
              VALUES ${values};`)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error adding roast levels:', error);
      res.sendStatus(500);
    })
})

//GET all roast levels to populate dropdown for customer
router.get('/roasts', (req, res) => {
  console.log('/api/inventory/roasts GET hit');
  pool.query(`SELECT * FROM "roast_levels"`)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting roast levels', error);
      res.sendStatus(500);
    })
})

router.get('/roasts/:id', (req, res) => {
  console.log('/api/inventory/roasts GET hit');
  pool.query(`SELECT * FROM "roast_levels" WHERE "id"=$1;`, [req.params.id])
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting roast levels', error);
      res.sendStatus(500);
    })
})

//UPDATE "beans" table from admin inventory table
router.put('/', (req, res) => {
  console.log('/api/inventory PUT hit');
  pool.query(`UPDATE "beans" SET ("name", "origin_description", "flavor_description", "image_url", "quantity", "notes")
              = ($1, $2, $3, $4, $5, $6) WHERE "id"= $7;`,
              [req.body.name, req.body.origin_description, req.body.flavor_description, req.body.image_url, req.body.quantity, req.body.notes, req.body.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('Error editing item:', error);
      res.sendStatus(500);
    })
})

//GET all in stock inventory for admin table display
router.get('/', (req, res) => {
  console.log('/api/inventory GET hit');
  pool.query(`SELECT outerBean."id", outerBean."flavor_description", outerBean."image_url", outerBean."name", outerBean."origin_description", outerBean."quantity", outerBean."notes", 
                (SELECT array_agg("roast_levels"."roast") as "roasts" FROM "roast_levels"
                  JOIN "roast_junction" ON "roast_junction"."roast_id"="roast_levels"."id"
                  LEFT JOIN "beans" ON "roast_junction"."bean_id" = "beans"."id"
                  WHERE "roast_junction"."bean_id" = outerBean."id")
              FROM "beans" outerBean;`)
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting order data', error);
      res.sendStatus(500);
    })
})

//GET just one bean type
router.get('/:id', (req, res) => {
  console.log('/api/inventory/:id GET hit');
  pool.query(`SELECT outerBean."id", outerBean."flavor_description", outerBean."image_url", outerBean."name", outerBean."origin_description", outerBean."quantity", 
                (SELECT array_agg("roast_levels"."roast") as "roasts" FROM "roast_levels"
                  JOIN "roast_junction" ON "roast_junction"."roast_id"="roast_levels"."id"
                  JOIN "beans" ON "roast_junction"."bean_id" = "beans"."id"
                  WHERE "roast_junction"."bean_id" = outerBean."id")
              FROM "beans" outerBean
              WHERE outerBean."id"=$1;`,[req.params.id])
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting order data', error);
      res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
  console.log('/api/inventory DELETE hit. req.query:', req.query);
  pool.query(`DELETE FROM "orders" WHERE "id"=$1;`, [req.query.id])
    .then(() => res.sendStatus(200))
    .catch(error => console.log('Error deleting order', error))
})

module.exports = router;