import DS from 'ember-data';

export default class ApplicationAdapter extends DS.RESTAdapter {
  shouldBackgroundReloadRecord() {
    return false;
  }
}