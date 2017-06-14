var process= require('process');
var locationService = require('./geolocation.js');
var weatherService=require('./weather.js');


locationService.getGeolocationDetails('tehran', (err,result)=>{
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
