import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import profileImg from "../../assets/images/profileImage.jpg";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

import "./Profile.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import ResumeMe from "../../assets/Sultonkul_Nortoylokov_Resume.pdf";

// const downloadFile = (f) => {
//   console.log("clicked");
//   window.location.href = "../../assets/Sultonkul_Nortoylokov_Resume.pdf";
// };

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={profileImg} alt="Profile" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Job" text={resumeData.title} />
          <CustomTimelineItem title="Birthday" text={resumeData.birthday} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem
            title="GitHub"
            text={resumeData.GitHub.username}
          />

          {/* {Object.keys(resumeData.socials).map((s, index) => (
            <CustomTimelineItem
              key={index}
              title={s}
              text={resumeData.socials[s].username}
              link={resumeData.socials[s].link}
            />
          ))} */}
        </CustomTimeline>
        <div className="button_container">
          <a href={ResumeMe} download="ResumeMe" target="_blank">
            <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
