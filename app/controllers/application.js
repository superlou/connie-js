import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['convention'],
  activeConvention: Ember.computed.alias('controllers.convention.activeConvention'),

  conventions: function() {
    return this.get('model').map((convention) => {
      return {name: convention.get('name'), id: convention.get('id')};
    });
  }.property('model'),

  onSelectedConChange: function() {
    var con_id = this.get('activeConvention');
    if (con_id) {
      this.send('selectConvention', con_id);
    }
  }.observes('activeConvention')
});
