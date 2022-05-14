import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { storageFor } from 'ember-local-storage';

export default class RegisterController extends Controller {
  @storageFor('logged-as') loggedAs;
  @service store;

  @action
  onLoginChange(event) {}

  @action
  onEmailChange(event) {}

  @action
  onPhotoURLChange(event) {}

  @action
  onPasswordChange(event) {}

  @action
  async onSubmit(event) {
    event.preventDefault();
  }
}