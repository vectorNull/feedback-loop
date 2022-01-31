const express = require('express');
require('./controllers/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
