import Route from '@ember/routing/route';

export default class AuctionRoute extends Route {
  
  model(params) {
    return this.store.findRecord('auction', params.id, { reload: true });
  }

}