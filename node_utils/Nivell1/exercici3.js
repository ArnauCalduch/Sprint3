//Llegeix el contingut del fitxer que li donem de manera 'asíncrona'
const fs = require('fs');

fs.readFile('read.txt','utf8', (err,data) => {
    if(err){
        console.log(err);
        return
    }
    console.log(data);
})