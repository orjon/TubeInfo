const express = require('express');
// const moment = require('moment');
const path = require('path');

const app = express();

//set static folder
app.use(express.static(path.join(__dirname)));
const root = require('path').join(__dirname);

console.log(root);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
  // res.sendFile('index.html', { root });
  console.log('Hit me! *');
});

const PORT = process.env.PORT || 5002;
// console.log('Server Start: ', moment(stats.serverStart).format('HH:mm:ss'));

app.listen(PORT, () => console.log(`TubeInfo running on ${PORT}`));
