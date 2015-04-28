import Ember from 'ember';

export function structureHour(params/*, hash*/) {
  var period = params[0];
  period = period.replace('pm', '<span class="period pm">pm</span>');
  period = period.replace('am', '<span class="period am">am</span>');
  return period.htmlSafe();
}

export default Ember.HTMLBars.makeBoundHelper(structureHour);
