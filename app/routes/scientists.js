import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Marie Curei', 'Mae Jemison', 'Albert Hofmann'];
  }
});
