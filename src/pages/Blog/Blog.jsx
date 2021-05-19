import React from "react";
import { Grid, Typography } from "@material-ui/core";

import "./Blog.css";

const Blog = () => {
  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Blog</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">No blogs yet</Typography>
      </Grid>
    </Grid>
  );
};

export default Blog;
