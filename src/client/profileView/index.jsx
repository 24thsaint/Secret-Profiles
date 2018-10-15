import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './ProfileView.css';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.profileStore = this.props.store.profileStore;
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.profileStore.loadProfile(id);
  }

  render() {
    return (
      <Grid item md={12}>
        <Grid container direction="column" spacing={16} className="profile-view-container">
          <Grid item>
            <Typography variant="title">{this.profileStore.profile.fullName}</Typography>
          </Grid>
          <Grid item>
            <Typography>Name</Typography>
          </Grid>
          <Grid item>
            <Typography>Name</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ProfileView;