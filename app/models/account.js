import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
  email: attr(),
  imageUrl: attr(),
  slackId: attr(),
  insertedAt: attr(),
  updatedAt: attr()
});
