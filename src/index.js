const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const router = express.Router();

const Store = require('./Store');
const Catalog = require('./Catalog');
const Product = require('./Product');

const bigCandle = new Product('Vela XL', 150);
bigCandle.profitabilityPercentageOf(50);
const candle = new Product('Vela', 100);
candle.profitabilityPercentageOf(50);
const pelota = new Product('Pelota', 3000);
pelota.profitabilityPercentageOf(80);

const catalog = new Catalog([bigCandle, candle, pelota]);
const store = new Store(catalog);


router.get('/catalog',
  (req, res) => {
    const catalog = store.jsonCatalog();
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(catalog);
    res.end();
  }
);

router.post('/sale',
  (req, res) => {
    store.sellProductsNamed(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(store.numberOfSales()));
    res.end();
  }
);

//TODO
router.get('/sales',
  (req, res) => {
    const sales = store.sales();
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(sales);
    res.end();
  }
);



app.use(router);
const port = 3000;
app.listen(port, function() {
  console.log(`Ready! Server started on port: ${port}`);
});

module.exports = app;

