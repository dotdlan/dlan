// Dependencies
const express = require('express')

//config
const app = express()

//PORT
const PORT = 3000

//use the public folder
app.use(express.static('public'))

//controllers
const homeController = require('./controllers/homeController.js')
app.use('/', homeController)

// //home route
// app.get('/', (req, res) => {
//     res.redirect('/')
// })

//app listening port
app.listen(PORT, () => {
    console.log('Listening on port:', PORT)
})

