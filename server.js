var express = require('express');
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
    console.log('EXPRESS SERVER LISTENING ON PORT ' + app.get('port'));
});