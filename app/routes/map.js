import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return {
      name: "Doubletree, First Floor",
      images: [
        'images/doubletree_lobby.png'
      ],
      rooms: [
        {
          name: 'Main Events B',
          points: '210,8 290,86 215,160 135,83'
        }
      ]
    };
  }
});
