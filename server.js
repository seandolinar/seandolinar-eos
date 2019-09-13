const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => { // new
    res.sendFile(__dirname + '/index.html');
  });

  app.use(
    express.static(
        path.join(__dirname)
    )
)

app.listen(3000, () => console.log('listening on port 3000'));


