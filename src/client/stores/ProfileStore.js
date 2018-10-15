import { observable, action } from 'mobx';
import Profile from '../../models/Profile';
import GraphQLClient from '../../../app/client/helpers/GraphQLClient';
import gql from 'graphql-tag';

class ProfileStore {
    @observable values = {}
    @observable profile = {}

    constructor(rootStore, client) {
      this.rootStore = rootStore;
      this.client = client;
    }

    @action.bound setValue(event) {
      this.values[event.target.name] = event.target.value;
    }

    @action.bound async saveProfile() {
      const profile = new Profile(this.values);
      try {  
        await this.client.service('api/profile').create(profile);
        alert('Saved!');
      } catch (error) {
        console.log(error.message);
      }
    }

    @action async loadProfile(id) {
      const graphql = new GraphQLClient();
      const result = await graphql.execute(gql`
        query Profile($id: String) {
          profile(id: $id) {
            firstName
            middleName
            lastName
          }
        }
      `, { id });
      const profile = new Profile(result.data.profile[0]);
      this.profile = profile;
      return id;
    }
}

export default ProfileStore;