import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service router;
  @storageFor('logged-as') loggedAs;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (!userId) {
      this.router.tarnsitionTo('/login');
      return;
    }
  }
}
