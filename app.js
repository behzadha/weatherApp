const yargs = require('yargs');
const locationService = require('./locationService');

var location = yargs.argv._[0];
location = encodeURIComponent(location);

locationService.getLocationInfo(location,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else
    {
     console.log(JSON.stringify(result,undefined,4));
    }
});
