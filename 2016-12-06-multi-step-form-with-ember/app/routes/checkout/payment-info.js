import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'checkout',

  model() {
    return this.modelFor('checkout');
  }
});
