import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('checkout', function() {
    this.route('personal-info');
    this.route('shipping-info');
    this.route('payment-info');
    this.route('confirmation');
  });
});

export default Router;
