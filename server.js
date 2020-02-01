var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', (_, res) => {
  res.status(200).json({ message: 'Hello World!' });
})

var PORT = process.env.PORT || '8667';

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`)
})