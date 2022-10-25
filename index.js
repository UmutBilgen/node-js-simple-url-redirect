const express = require("express")
const app = express()


const connection = require('./mongodb/config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

app.use(express.json({
    extended: false
})) 
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/urls'))

//Listen for incoming requests
const PORT = 8000
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))