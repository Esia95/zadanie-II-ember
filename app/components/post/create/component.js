import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostCreateModalComponent extends Component {
  @tracked isShowCreateModal = false;

  @action
  onShowModal() {
    console.log('showModal');
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    console.log('hideModal');
    this.isShowCreateModal = false;
  }
}
