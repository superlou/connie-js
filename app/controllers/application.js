import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['con'],
  activeCon: Ember.computed.alias('controllers.con.activeCon'),

  cons: function() {
    return this.get('model').map((con) => {
      return {name: con.get('name'), id: con.get('id')};
    });
  }.property('model'),

  onSelectedConChange: function() {
    var con_id = this.get('activeCon');
    if (con_id) {
      this.send('selectCon', con_id);
    }
  }.observes('activeCon')
});
