module.exports = function(app) {
  var express = require('express');
  var conRouter = express.Router();

  conRouter.get('/', function(req, res) {
    res.send({
      'events': [
        {
          id: 1,
          name: 'Pre-Registration'
        },
        {
          id: 2,
          name: 'Registration'
        }
      ]
    });
  });

  conRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  conRouter.get('/:id', function(req, res) {
    res.send({
      'con': {
        id: req.params.id
      }
    });
  });

  conRouter.put('/:id', function(req, res) {
    res.send({
      'con': {
        id: req.params.id
      }
    });
  });

  conRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', conRouter);
};
