module.exports = function(app) {
  var express = require('express');
  var mapRouter = express.Router();

  mapRouter.get('/', function(req, res) {
    res.send({
      'map': []
    });
  });

  mapRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  mapRouter.get('/:id', function(req, res) {
    res.send(
    {
      'map': {
        id: req.params.id,
        name: "Doubletree, First Floor",
        image: 'images/doubletree_lobby.png',
        map_area_ids: [1, 2]
      },

      map_areas: [
        {
          id: 1,
          area_id: 1,
          points: '210,8 290,86 215,160 135,83'
        },
        {
          id: 2,
          area_id: 2,
          points: '418,61 455,61 512,115 511,153 428,155 419,147'
        }
      ],

      areas: [
        {
          id: 1,
          name: 'Main Events B'
        },
        {
          id: 2,
          name: 'Mirabelle'
        }
      ]
    }
    );
  });

  mapRouter.put('/:id', function(req, res) {
    res.send({
      'map': {
        id: req.params.id
      }
    });
  });

  mapRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/maps', mapRouter);
};
