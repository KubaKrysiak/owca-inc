const express = require('express');
const app = express();
const data = require('./dane');
const owce = data.getOwce();
console.log(owce);
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('hello world')
})

app.delete('/owce/:ID', function (req, res) {
 const ID = req.params.ID;
 owce = owce.filter(owca => owca.ID != ID);
 res.send('ojojojoj ups'+ ID)
})
app.patch('/owce')
app.get('/owce', function (req, res){
  res.json(owce);
})
app.post('/owce', function (req, res){
  const owca = {
    location:req.body.location, 
    ID:parseInt(Math.random()*1000),
    Age:req.body.Age,
    needsShaving:false,
    broken:true,}
    console.log("dostakiwdwqwfdqw", owca);
    owce.push(owca);
    res.json(owca);
})
data.save();
app.listen(8080, () => console.log(`Example app listening on port ${8080}!`))
