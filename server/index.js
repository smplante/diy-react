const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3033;
const DIST_DIR = path.join(__dirname, '../dist');
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR));
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.listen(port, function () {
 console.log('App listening on port:',port);
});
