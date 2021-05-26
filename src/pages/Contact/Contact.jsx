import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
} from "react-google-maps";
import resumeData from "../../utils/resumeData";

import "./Contact.css";
import CustomButton from "../../components/Button/Button";

const Map = (props) => (
  <GoogleMap
    // ref={props.onMapLoad}
    defaultZoom={10}
    defaultCenter={{ lat: 41.316441, lng: 69.294861 }}
    // googleMapURL={googleMapURL}
    // onClick={props.onMapClick}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
);

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contact = () => {
  return (
    <Grid container spacing={6} className="section mt_30 pb_45 pt_45">
      {/* Contact form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Form</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="email" label="E-mail" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomButton text="Submit" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact information */}
      <Grid item xs={12} lg={5}>
        <Grid conntainer>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact Information</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Address: </span>
                  {resumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Phone: </span>
                  {resumeData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Email: </span>
                  {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="contactInfo_socialsContainer">
              {Object.keys(resumeData.socials).map((key, index) => (
                <Grid key={index} item className="contactInfo_social">
                  <a href={resumeData.socials[key].link} target="_blank">
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Map */}

      {/* <Grid item xs={12}>
        <Grid container>
          <Grid item className="map">
            <WrappedMap
              googleMapURL={
                "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}"
              }
              isMarkerShown={"isMarkerShown"}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Contact;
