import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    const user1 = {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      isAdmin: true,
      photoURL: 'https://memegenerator.net/img/images/71831023/mapa-janusz.jpg',
    };
    const user2 = {
      id: 2,
      username: 'user',
      password: 'user',
      email: 'user@user.com',
      photoURL:
        'https://data3.cupsell.pl/upload/generator/266414/640x420/5015943_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235',
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);

    await user1Model.save();
    await user2Model.save();

    const post1 = {
      id: 1,
      title: 'Test1',
      body: 'Zawartość tekstowa',
      owner: user1Model,
    };
    const post2 = {
      id: 2,
      title: 'Test2',
      body: 'Zawartość tekstowa2',
      owner: user1Model,
    };
    const post3 = {
      id: 3,
      title: 'Test3',
      body: 'Zawartość tekstowa3',
      owner: user2Model,
    };

    const post1Model = this.store.createRecord('post', post1);
    const post2Model = this.store.createRecord('post', post2);
    const post3Model = this.store.createRecord('post', post3);

    await post1Model.save();
    await post2Model.save();
    await post3Model.save();
  }
}
