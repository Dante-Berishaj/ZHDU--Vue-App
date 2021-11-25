'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;

app.get('/', function (req, res) {
  res.send('YO MAMA World!');
});

app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port);
});