const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 5000;
const app = express();

// HandleBars MiddleWare
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
// public folder
const publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir));

// Routing
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(port,() =>
{
    console.log("Starting Server on Port " + port)
}
)