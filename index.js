//console.log("My second project");

var fs = require('fs');
 
fs.readFile(__file, function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
