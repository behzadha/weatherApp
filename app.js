var process= require('process');
var yargs = require('yargs');

var locationService = require('./geolocation.js');
var weatherService=require('./weather.js');

var locationName = yargs.argv._[0];

locationService.getGeolocationDetails(locationName, (err,result)=>{
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
