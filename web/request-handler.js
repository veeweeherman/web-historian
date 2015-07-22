var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var url = require('url');

exports.handleRequest = function (req, res) {
  res.end(archive.paths.list);
};
