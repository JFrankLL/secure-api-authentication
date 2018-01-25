const app = require('./app/src/app');

var PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!!`);
});
