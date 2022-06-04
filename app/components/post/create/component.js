import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostCreateModalComponent extends Component {
  @service session;
  @service store;
  @tracked isShowCreateModal = false;
  @tracked title = '';
  @tracked content = '';

  get hasEmptyFields() {
    return !(this.title && this.content);
  }

  @action
  onShowModal() {
    console.log('showModal');
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    console.log('hideModal');
    this.clearFields();
    this.isShowCreateModal = false;
  }

  @action
  onTitleChange(event) {
    this.title = event.target.value;
  }

  @action
  onContentChange(event) {
    this.content = event.target.value;
  }

  @action
  async onSave() {
    const post = {
      title: this.title,
      body: this.content,
      owner: this.session.currentUser,
    };
    const postModel = this.store.createRecord('post', post);
    await postModel.save();
    this.clearFields();
    this.isShowCreateModal = false;
  }

  clearFields() {
    this.tile = '';
    this.content = '';
  }
}
