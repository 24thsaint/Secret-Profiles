import React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import { inject, observer } from 'mobx-react';

import './Homepage.css';

@inject('store') @observer
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.fooStore = this.props.store.fooStore;
  }

  render() {
    return (
      <Grid 
        container 
        className="homepage-container"
        item 
        alignItems="center" 
        direction="column"
        spacing={8}
      >
        <Grid item>
          <TextField 
            label="Person Search"
            variant="outlined"
            placeholder="Person Search"
          />
        </Grid>
        <Grid item>
          <Button variant="outlined">Go</Button>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;