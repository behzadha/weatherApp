var request = require('request');

getGeolocationDetails = (location, callback)=>{
    if(location!=undefined){
     request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${location}`,json:true},(error,response,body)=>{
         if(error){
             callback(error);
         }
         else
         {
             var result = {
                 lat : body.results[0].geometry.location.lat,
                 lng  : body.results[0].geometry.location.lng,
                 locationName : body.results[0].address_components[0].long_name 
             };
             callback(undefined, result);
         }
     } );
    }
}

module.exports = {
    getGeolocationDetails
};