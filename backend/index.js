const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get('/projects', (req, res) => {
  console.log(`projects to include: unsplash image gallery, react world clocks - add an imput to it so user can choose,
  vanilla JS todo list, music events aggregator, postGris final project, react ticktack toe. `);
  res.send(['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6']);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
