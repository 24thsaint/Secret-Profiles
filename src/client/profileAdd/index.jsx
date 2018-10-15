import React from 'react';
import { TextField, Grid, Button, Typography, Divider, InputAdornment } from '@material-ui/core';

import './ProfileAdd.css';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class ProfileAdd extends React.Component {
  constructor(props) {
    super(props);
    this.profileStore = this.props.store.profileStore;
  }

  render() {
    return (
      <Grid item md={12}>
        <form>
          <Grid container item direction="column" className="profile-add-container" spacing={8}>

            <Grid item>
              <Typography variant="title">Personal Profile</Typography>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <Typography variant="caption">Basic Information</Typography>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={1} xs={12}>
                <TextField 
                  label="Title"
                  name="title"
                  onChange={this.profileStore.setValue}
                  placeholder="Mr/Ms/Mrs/Dr/Engr"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="First Name"
                  name="firstName"
                  onChange={this.profileStore.setValue}
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField 
                  label="Middle Name"
                  name="middleName"
                  onChange={this.profileStore.setValue}
                  placeholder="Middle Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="Last Name"
                  name="lastName"
                  onChange={this.profileStore.setValue}
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={1} xs={12}>
                <TextField 
                  label="Suffix"
                  name="suffix"
                  onChange={this.profileStore.setValue}
                  placeholder="Suffix"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField 
                  type="date"
                  label="Birth Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="birthdate"
                  onChange={this.profileStore.setValue}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item xs={12} md={10}>
                <TextField 
                  label="Address"
                  name="address"
                  onChange={this.profileStore.setValue}
                  placeholder="Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField 
                  type="date"
                  label="Death Date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="deathdate"
                  onChange={this.profileStore.setValue}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={5} xs={12}>
                <TextField 
                  label="Contact Number"
                  name="contactNumber"
                  onChange={this.profileStore.setValue}
                  placeholder="Contact Number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <TextField 
                  label="Email Address"
                  name="emailAddress"
                  onChange={this.profileStore.setValue}
                  placeholder="Email Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField 
                  label="Gender"
                  name="gender"
                  onChange={this.profileStore.setValue}
                  placeholder="Gender"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={10} xs={12}>
                <TextField 
                  label="Significance"
                  name="significance"
                  onChange={this.profileStore.setValue}
                  placeholder="I first met this person on... / This person is known for..."
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField 
                  label="Blood Type"
                  name="bloodType"
                  onChange={this.profileStore.setValue}
                  placeholder="A/AB/B/O (+/-)"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <Typography variant="caption">Family Information</Typography>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={5} xs={12}>
                <TextField 
                  label="Father's Name"
                  name="fatherName"
                  onChange={this.profileStore.setValue}
                  placeholder="Father's Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={5} xs={12}>
                <TextField 
                  label="Mother's Name"
                  name="motherName"
                  onChange={this.profileStore.setValue}
                  placeholder="Mother's Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <TextField 
                  label="Siblings"
                  name="siblings"
                  onChange={this.profileStore.setValue}
                  placeholder="Siblings"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <Typography variant="caption">Career Information</Typography>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={6} xs={12}>
                <TextField 
                  label="Company Name"
                  name="companyName"
                  onChange={this.profileStore.setValue}
                  placeholder="Company Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField 
                  label="Company Address"
                  name="companyAddress"
                  onChange={this.profileStore.setValue}
                  placeholder="Company Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={4} xs={12}>
                <TextField 
                  label="Occupation"
                  name="occupation"
                  onChange={this.profileStore.setValue}
                  placeholder="Occupation"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item md={4} xs={12}>
                <TextField 
                  label="Position"
                  name="position"
                  onChange={this.profileStore.setValue}
                  placeholder="Position"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid item md={4} xs={12}>
                <TextField 
                  type="number"
                  label="Salary"
                  name="salary"
                  onChange={this.profileStore.setValue}
                  placeholder="Salary"
                  variant="outlined"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₱</InputAdornment>,
                    endAdornment: <InputAdornment position="end">per year</InputAdornment>
                  }}
                />
              </Grid>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <Typography variant="caption">Favorites Information</Typography>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="Color"
                  name="favoriteColor"
                  onChange={this.profileStore.setValue}
                  placeholder="Color"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="Food"
                  name="favoriteFood"
                  onChange={this.profileStore.setValue}
                  placeholder="Food"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="Hobby"
                  name="hobby"
                  onChange={this.profileStore.setValue}
                  placeholder="Hobby"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <TextField 
                  label="Game"
                  name="game"
                  onChange={this.profileStore.setValue}
                  placeholder="Game"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item>
              <Divider />
            </Grid>

            <Grid item>
              <Typography variant="caption">Summary</Typography>
            </Grid>

            <Grid container item direction="row" spacing={8}>
              <Grid item xs={10} md={12}>
                <TextField 
                  label="Summary"
                  name="summary"
                  onChange={this.profileStore.setValue}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                  rowsMax={8}
                />
              </Grid>
            </Grid>

            <Grid item container direction="row" justify="center" spacing={16}>
              <Grid item>
                <Button variant="outlined" type="reset">
                    Reset Form
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="primary" onClick={this.profileStore.saveProfile}>
                    Save Profile
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </form>
      </Grid>
    );
  }
}

export default ProfileAdd;