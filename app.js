const express = require('express');
const hbs = require('hbs');
const app = express();
const locationService = require('./locationService');

var port = process.env.PORT || 3000;

app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'));

hbs.registerPartials(__dirname+'/views/partials/');

hbs.registerHelper('getCurrentYear',()=>{
   return new Date().getFullYear();
});



app.get('/location/:locationName',(req,res)=>{
console.log(req.params.locationName);
    locationService.getLocationInfo(req.params.locationName,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
        res.render('location.hbs', result);
    }
});
});

app.get('/',(req,res)=>{
    res.render('index.hbs');
})




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})