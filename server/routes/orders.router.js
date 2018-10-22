const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.post('/', (req, res) => {
  console.log('req.body:', req.body);
  pool.query(`INSERT INTO "orders" ("first_name", "last_name", "street_address", "city", "state", "zipcode", "phone", "email", "bean", "roast", "order_status", "quantity")
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`, 
              [req.body.first_name, req.body.last_name, req.body.street_address, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.email, req.body.bean, req.body.roast, req.body.order_status, req.body.quantity])
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log('Error submitting order', error);
      res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
  console.log('/api/orders GET hit');
  pool.query(`SELECT "orders"."id",
              "orders"."first_name", 
              "orders"."last_name", 
              "orders"."street_address", 
              "orders"."city", 
              "orders"."state", 
              "orders"."zipcode", 
              "orders"."phone", 
              "orders"."email",
              "beans"."name", 
              "roast_levels"."roast",
              "orders"."quantity",
              "order_status"."status"
              FROM "orders"
              JOIN "roast_levels" on "roast_levels"."id" = "orders"."roast"
              JOIN "beans" ON "beans"."id" = "orders"."bean"
              JOIN "order_status" ON "orders"."order_status" = "order_status"."id";`)
    .then(results => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch(error => {
      console.log('Error getting order data', error);
      res.sendStatus(500);
    })
})

router.put('/', (req, res) => {
  console.log('/api/orders PUT hit');
  pool.query(`UPDATE "orders" SET "order_status"=$1 WHERE "id"=$2`, [req.body.order_status, req.body.id])
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log('Error editing order status', error);
      res.sendStatus(500);
    })
})

router.delete('/', (req, res) => {
  console.log('/feedback DELETE hit. req.query:', req.query);
})

module.exports = router;