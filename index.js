const express    = require('express');
const mongoose   = require('mongoose');
const requireDir = require('require-dir');
const cors       = require('cors');
const bodyParser = require("body-parser");

const app        = express();
const port       = 8009;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/course', {useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log("OK! mongoDB connected!"))
   .catch(err => console.log("ERROR 404" + err))

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

requireDir('./src/models');

app.use('/system', require('./src/routes/routes'));

app.listen(port, () => console.log("API listering to port http://localhost:8009/system/users"));