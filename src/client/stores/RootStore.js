import FooStore from './FooStore';
import ProfileStore from '../../../app/client/stores/ProfileStore';

class RootStore {
  constructor(client) {
    this.fooStore = new FooStore(this, client);
    this.profileStore = new ProfileStore(this, client);
  }
}

export default RootStore;