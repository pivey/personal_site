const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/projects', (req, res) => {
  console.log(`projects to include: unsplash image gallery, react world clocks - add an imput to it so user can choose,
  vanilla JS todo list, music events aggregator, postGris final project, react ticktack toe. `);
  res.send([
    {name: 'Project 1', link:'https://fakturinofrontend.herokuapp.com/'}, {name: 'Project 2', link:'https://fakturinofrontend.herokuapp.com/'}, {name: 'Project 3', link:'https://fakturinofrontend.herokuapp.com/'}, {name: 'Project 4', link:'https://fakturinofrontend.herokuapp.com/'}, {name: 'Project 5', link:'https://fakturinofrontend.herokuapp.com/'}, {name: 'Project 6', link:'https://fakturinofrontend.herokuapp.com/'}
    ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
