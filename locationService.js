var axios = require('axios');

getLocationInfo = (locationName,callback) =>{
var geoUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}`;
axios.get(geoUrl).then((response)=>{
      var result = {
                 lat : response.data.results[0].geometry.location.lat,
                 lng  : response.data.results[0].geometry.location.lng,
                 locationName : response.data.results[0].address_components[0].long_name 
             };
         
             var weatherUrl = `https://api.darksky.net/forecast/e88cda2c0b1172dde5299989758119e0/${result.lat},${result.lng}`;
             return axios.get(weatherUrl).then(b=>[result,b]);

}).then(([locationRs,response])=>{
            var result = {
            locationDetails : {latitude:locationRs.lat, longitude:locationRs.lng},
            temperature: response.data.currently.temperature,
            humidity: response.data.currently.humidity,
            windSpeed:response.data.currently.windSpeed,
            summary:response.data.currently.summary
        };
    return result;
}).then((rs)=>{
    callback(undefined,rs);
}) .catch((err)=>{
  callback(err);
});
}

module.exports = {
    getLocationInfo
}