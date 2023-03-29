// const fs = require('fs')


// fs.readFile('arquivo.txt', 'utf8', (err,data)=>{

//     if(err){
//         console.log(err)
//     }
// console.log(data)
// })

// const fs = require('fs');

// fs.readFile('/caminho/para/o/arquivo.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

module.exports ={
    Desconto(a,b){
        console.log(Math.round(a*b)/10);
    }
}



