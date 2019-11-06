const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/projects', (req, res) => {
  res.send([
    { name: 'React tic tac toe', link: 'https://reactticktacktoe.herokuapp.com/', bgc: 'react' },
    { name: 'Project 2', link: 'https://fakturinofrontend.herokuapp.com/', bgc: null },
    { name: 'Project 3', link: 'https://fakturinofrontend.herokuapp.com/', bgc: null },
    { name: 'Project 4', link: 'https://fakturinofrontend.herokuapp.com/', bgc: null },
    { name: 'Project 5', link: 'https://fakturinofrontend.herokuapp.com/', bgc: null },
    { name: 'Project 6', link: 'https://fakturinofrontend.herokuapp.com/', bgc: null },
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
