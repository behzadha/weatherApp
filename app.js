const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

const locationService = require('./locationService');



app.get('/weather/:locationName',(req,res)=>{
console.log(req.params.locationName);
    locationService.getLocationInfo(req.params.locationName,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
   res.send(JSON.stringify(result,undefined,4));
    }
});
});




app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})