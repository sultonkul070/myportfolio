import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      <Grid container className="section pt_45">
        {/* Title */}
        <Grid item className="section_title">
          <span></span>
          <h6 className="section_title_text">Portfolio</h6>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="section pb_45 pt_45">
        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indicatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue == "All" ? "customTabs_item active" : "customTabs_item"
              }
            />
            {[...new Set(resumeData.projects.map((item) => item.tag))].map(
              (tag, index) => (
                <Tab
                  key={index}
                  label={tag}
                  value={tag}
                  className={
                    tabValue == tag
                      ? "customTabs_item active"
                      : "customTabs_item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>

        {/* Projects */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.projects.map((project, index) => (
              <>
                {tabValue == project.tag || tabValue == "All" ? (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Grow in timeout={1000}>
                      <Card
                        className="customCard"
                        onClick={() => setProjectDialog(project)}
                      >
                        <CardActionArea>
                          <CardMedia
                            className="customCard_image"
                            image={project.images[0]}
                            title={project.title}
                          />
                          <CardContent>
                            <Typography
                              variant={"body2"}
                              className="customCard_title"
                            >
                              {project.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="customCard_caption"
                            >
                              {project.caption}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>

        <Dialog
          className="projectDialog"
          open={projectDialog}
          onClose={() => setProjectDialog(false)}
          fullWidth
          maxWidth={"lg"}
        >
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {projectDialog.title}
          </DialogTitle>
          <DialogContent style={{ height: "80vh" }}>
            {projectDialog.images && (
              <ImageGallery images={projectDialog.images} />
            )}
            <Typography className="projectDialog_description">
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_actions">
            {projectDialog?.links?.map((link, index) => (
              <a
                href={link.link}
                target="_blank"
                className="projectDialog_icon"
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Portfolio;
