import Controller from '@ember/controller';
import { set } from '@ember/object';

export default class PlaygroundController extends Controller {
  readonly breadCrumb = { label: 'Component Playground', rewind: 1 };

  public shrinkJumbotron = false;

  public showModal = false;

  toggleJumbotron() {
    set(this, 'shrinkJumbotron', !this.shrinkJumbotron);
  }

  toggleModal() {
    set(this, 'showModal', !this.showModal);
  }
}
