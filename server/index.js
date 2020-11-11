var express = require ('express');


var app = express();
app.use(express.static('public/dist'));
app.use(express.json());


const PORT = 9999;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
})