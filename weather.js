var request = require('request');

getWeatherInfo=(lat,lng,callback)=>{
request({url:`https://api.darksky.net/forecast/e88cda2c0b1172dde5299989758119e0/${lat},${lng}`,json:true},(err,response,body)=>{
    if(err){
        callback(err)
    }
    else
    {
        var result = {
            temperature: body.currently.temperature,
            humidity: body.currently.humidity,
            windSpeed:body.currently.windSpeed,
            summary:body.currently.summary
        }
       callback(undefined, result);
    }
})
};

module.exports = {
    getWeatherInfo
}