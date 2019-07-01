import DS from 'ember-data';
const { Model, attr } = DS;

export default class AuctionModel extends Model {
  @attr() title;
  @attr('number') price;
}