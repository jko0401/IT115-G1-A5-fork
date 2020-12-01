const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));
