require('dotenv').config({ path: 'variables.env' });

const app = require('./app');
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), "0.0.0.0", () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

