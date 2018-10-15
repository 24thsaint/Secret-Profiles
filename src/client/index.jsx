/* global document */
import 'typeface-roboto';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import { Grid, Paper } from '@material-ui/core';

import client from './client';
import RootStore from './stores/RootStore';
import Homepage from './homepage/Homepage';
import ProfileAdd from './profileAdd';
import ProfileView from './profileView';

import './index.css';

const rootStore = new RootStore(client);

const Index = () => (
  <Provider store={rootStore}>
    <Router>
      <Grid container className="container">
        <Paper elevation={1}>
          <Route exact path='/' component={Homepage} />
          <Route path='/profile/add' component={ProfileAdd} />
          <Route path='/profile/view/:id' component={ProfileView} />
        </Paper>
      </Grid>
    </Router>
  </Provider>
);

ReactDOM.render(
  <Index />, document.getElementById('app')
);