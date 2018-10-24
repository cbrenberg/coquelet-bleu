const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

//TODO: Change all bean routes to /api/inventory/beans

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  pool.query(`INSERT INTO "beans" ("name", "origin_description", "flavor_description", "image_url", "quantity")
              VALUES ($1, $2, $3, $4, $5);`,
              [req.body.name, req.body.origin_description, req.body.flavor_description, req.body.image_url, req.body.quantity])
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log('Error submitting order', error);
      res.sendStatus(500);
    })
})

//UPDATE "beans" table from admin inventory table
router.put('/', (req, res) => {
  console.log('/api/inventory PUT hit');
  pool.query(`UPDATE "beans" SET "$1"='$2' WHERE "id"=$3;`, [req.body.column, req.body.value, req.body.id])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(error => console.log('Error editing item:', error))
})

//GET all in stock inventory for admin table display
router.get('/', (req, res) => {
  console.log('/api/inventory GET hit');
  pool.query(`SELECT outerBean."id", outerBean."flavor_description", outerBean."image_url", outerBean."name", outerBean."origin_description", outerBean."quantity", 
                (SELECT array_agg("roast_levels"."roast") as "roasts" FROM "roast_levels"
                  JOIN "roast_junction" ON "roast_junction"."roast_id"="roast_levels"."id"
                  JOIN "beans" ON "roast_junction"."bean_id" = "beans"."id"
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
  console.log('/api/inventory GET hit');
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