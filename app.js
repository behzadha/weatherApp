var process= require('process');
var yargs = require('yargs');

var locationService = require('./geolocation.js');
var weatherService=require('./weather.js');
const argv = yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'address to fetch the weather for',
        string: true
    }
}).help().alias('help','h').argv;

var locationName = encodeURIComponent(yargs.a); 
p.getGeolocationDetails(locationName, (err,result)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log(result);
        weatherService.getWeatherInfo(result.lat, result.lng, (err,weatherResult)=>{
            if(err){
                console.log(err);
            }
            else
            {
                console.log(JSON.stringify(weatherResult, undefined, 2));
            }
            
        });
    }
});
