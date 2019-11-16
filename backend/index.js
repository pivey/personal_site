const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/projects', (req, res) => {
  res.send([
    { name: 'React tic tac toe', link: 'https://reactticktacktoe.herokuapp.com/', bgc: 'reactBgc' },
    { name: 'React world clocks', link: 'https://reactclocks.herokuapp.com/', bgc: 'reactBgc' },
    { name: 'Vanilla JS todo list', link: 'https://pivey.github.io/vanilla-JS-ToDo-list/', bgc: 'vanilla' },
    { name: 'Combined kata calculator', link: 'https://salt-demo3.herokuapp.com/', bgc: 'vanilla' },
    { name: 'Under Construction', link: '', bgc: 'construction' },
    { name: 'Under Construction', link: '', bgc: 'construction' },
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
