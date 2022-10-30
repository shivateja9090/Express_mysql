const express = require('express')
const app=express()
const allTablesroute=require('./routes/allTables')
const angularRoute=require('./routes/angularTable')
const reactRoute=require('./routes/react')
const spring_Route=require('./routes/spring_boot')

app.use('/allfolders',allTablesroute)
app.use('/angular',angularRoute)
app.use('/react',reactRoute)
app.use('/spring_boot',spring_Route)
app.listen(process.env.PORT || '3000' ,()=>{
console.log(`server started and listening to0 ${process.env.PORT || '3000'}`)
})

module.exports = app
