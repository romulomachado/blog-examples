import DS from 'ember-data';

export default DS.Model.extend({
  // personal info
  name: DS.attr('string'),
  email: DS.attr('string'),

  // shipping info
  address: DS.attr('string'),
  zipCode: DS.attr('string'),

  // payment info
  cardNumber: DS.attr('string'),
  cardVerification: DS.attr('string'),
  cardExpiration: DS.attr('string')
});
