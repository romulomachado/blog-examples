import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitForm() {
      console.log('Order placed!');
      this.transitionToRoute('checkout.confirmation');
    }
  }
});
