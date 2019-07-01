import Route from '@ember/routing/route';

export default class AuctionsRoute extends Route {
  
  model() {
    return this.store.findAll('auction');
  }

}