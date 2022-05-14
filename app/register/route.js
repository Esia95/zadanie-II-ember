import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';
//import { action } from '@ember/object';

export default class RegisterRoute extends Route {
  @service store;
  @service router;
  @storageFor('logged-as') loggedAs;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.tarnsitionTo('home');
      return;
    }
  }

  model() {
    return this.store.createRecord('user');
  }
}
