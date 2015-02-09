import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.Object.create({
      name: "Doubletree, First Floor",
      images: [
        'images/doubletree_lobby.png'
      ],
      rooms: [
        Ember.Object.create({
          name: 'Main Events B',
          points: '210,8 290,86 215,160 135,83'
        }),

        Ember.Object.create({
          name: 'Mirabelle',
          points: '418,61 455,61 512,115 511,153 428,155 419,147'
        })
      ]
    });
  }
});
