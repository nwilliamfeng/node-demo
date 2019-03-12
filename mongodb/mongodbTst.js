
const mongoose = require('mongoose');

const sayHello=function(msg){
    mongoose.connect('mongodb://localhost/testdb');
    const db =mongoose.connection;
    db.on('open',()=>console.log('opened'));
    
};

module.exports={
    sayHello,
}