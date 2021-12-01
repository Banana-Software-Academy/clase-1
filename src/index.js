const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();



router.post('/test',
  (req, res) => {
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send({hi: 'there'})
    res.end();
  }
);



app.use(router);
const port = 3000;
app.listen(port, function() {
  console.log(`Ready! Server started on port: ${port}`);
});

module.exports = app;

