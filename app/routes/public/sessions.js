import Ember from 'ember';

const { Route, RSVP } = Ember;

export default Route.extend({
  titleToken() {
    return this.l10n.t('Sessions');
  },

  model() {
    const eventDetails = this._super(...arguments);
    return RSVP.hash({
      event: eventDetails,
      sessions: eventDetails.get('sessions')
    });
  }
});
