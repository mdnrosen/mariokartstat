const
    express = require('express'),
    app = express(),
    path = require('path'),
    routes = require('./routes/index'),
    helpers = require('./helpers')




app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'))
}
// app.listen(PORT, () => {
//     console.log(`SERVER RUNNNING - PORT ${PORT}`)
// })


app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
  });


app.use('/', routes)




module.exports = app