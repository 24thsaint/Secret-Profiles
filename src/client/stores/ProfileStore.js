import { observable, action } from 'mobx';
import Profile from '../../models/Profile';

class ProfileStore {
    @observable values = {}

    constructor(rootStore, client) {
      this.rootStore = rootStore;
      this.client = client;
    }

    @action.bound setValue(event) {
      this.values[event.target.name] = event.target.value;
    }

    @action.bound saveProfile() {
      const profile = new Profile(this.values);
      console.log(profile);
    }
}

export default ProfileStore;