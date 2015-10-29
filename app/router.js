import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('auctions', { path: '/' });
  this.route('auction', { path: '/:id' });
});

export default Router;
