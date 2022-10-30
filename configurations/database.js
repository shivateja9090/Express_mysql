const mysql= require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    database:'expressfolders',
    user:'root',
    password:'password'
})
connection.connect((err)=>{
    if(err)
    {
   throw err
    }
    else{
    console.log("MYSQL DB CONNECTED")
    }
})
module.exports=connection