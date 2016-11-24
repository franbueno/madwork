define(function(require) {
  'use strict';

  var module = require('./module');
  require('./resource');
  require('./filters/uniq');
  require('./services/navbar');
  require('./controllers/detail');
  require('./controllers/search');
  require('./routes');

  return module;

});
