import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostShowRoute extends Route {
  @service store;

  model(params) {
    const posts = this.store.findRecord('post', params.id);
    return posts;
  }
}
