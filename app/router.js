import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auctions', { path: '/' });
  this.route('auction', { path: '/:id' });
});

export default Router;
