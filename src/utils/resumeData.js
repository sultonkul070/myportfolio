import React from "react";

import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebOutlined from "@material-ui/icons/WebOutlined";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default {
  name: "Sultonkul Nortoylokov",
  title: "Full Stack Developer",
  job: "Software Engineer",
  birthday: "17th June 2000",
  phone: "(+998) 91 644 11 00",
  email: "sultonkul070nortoylokov@gmail.com",
  address: "Shaykhontohur, Tashkent",
  GitHub: {
    link: "https://www.github.com/Sultonkul070",
    username: "@Sultonkul070",
    icon: <GitHubIcon />,
  },
  Telegram: {
    link: "https://www.t.me/nortoylokov",
    username: "@nortoylokov",
    icon: <TelegramIcon />,
  },
  socials: {
    LinkedIn: {
      link: "https://uz.linkedin.com/in/sultonkul-nortoylokov-3597a2206",
      username: "SultonkulNortoylokov",
      icon: <LinkedInIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com/@SultonkulN",
      username: "@SultonkulN",
      icon: <TwitterIcon />,
    },
    Facebook: {
      link: "https://www.facebook.com/SultonkulNortoylokov",
      username: "SultonkulNortoylokov",
      icon: <FacebookIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/nortoylokov",
      username: "@nortoylokov",
      icon: <InstagramIcon />,
    },
  },
  about:
    "An undergraduate IT student, Young software developer, very curious and passionate about learning new IT sciences, technologies and working with them.",

  experiences: [
    {
      title: "Frontend Developer - Algorithm Gateway",
      date: "March 2021 - May 2021",
      description:
        "I was a Frontend Developer and Software Engineer who is responsible for creating UI of Websites and Web Applications!",
    },
    {
      title: "Frontend Developer - TeamPro",
      date: "January 2021 - March 2021",
      description:
        "I was a Frontend Developer and Software Engineer who is responsible for creating UI of Websites and Web Applications!",
    },

    {
      title: "Frontend Developer - U.M D Soft",
      date: "November 2020 - January 2021",
      description:
        "I was a Frontend Developer and Software Engineer who is responsible for creating UI of Websites and Web Applications!",
    },
  ],
  educations: [
    {
      title: "Bachelor Degree - Amity University in Tashkent",
      date: "August 2019 - June 2022",
      description:
        "I am 3rd year student of bachelor at Amity University in Tashkent, on the faculty of Information Technology ",
    },
    {
      title:
        "High School Degree - Kitab Vocational College of Economy and Services",
      date: "August 2016 - June 2019",
      description:
        "I was a student at Kitab Vocational College of Economy and Services on the faculty of Automobile Engineering. I have graduated the College with 98% result",
    },
    {
      title: "Middle School Degree - Kitab Second Lyceum",
      date: "August 2011 - June 2016",
      description:
        "I have studied at the Lyceum during 5 years I have graduated the Lyceum with 98% result and I have taken Red Certificate ",
    },
  ],
  services: [
    {
      title: "Frontend Development",
      description:
        "I have much experiences on making the frontend UI of Web Applications which made by React Js, Next Js",
      icon: <WebOutlined />,
    },
    {
      title: "Backend Development",
      description:
        "I am able to make the backend part of Web Sites with the most modern technologies like Node Js, Epress JS, Mongo DB",
      icon: <SettingsOutlinedIcon />,
    },
    {
      title: "Mobile App Development",
      description:
        "I am able to make the amazing Mobile Applications with the most modern technologies like React Native",
      icon: <PhoneIphoneIcon />,
    },
  ],
  skills: [
    {
      title: "Frontend",
      description: [
        "React Js",
        "TypeScript",
        "JavaScript",
        "Material UI",
        "Tailwind CSS",
        "Sass",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
    },
    {
      title: "Backend",
      description: ["Node Js", "Express Js", "Mongo DB"],
    },
    {
      title: "Source Control",
      description: ["Git", "GitHub", "GitLab"],
    },
    {
      title: "Other Software Skills",
      description: ["Redux", "API", "Next Js", "React Native"],
    },
  ],

  projects: [
    {
      tag: "Next JS",
      images: [
        "../assets/projects/project-10.png",
        "../assets/projects/project-11.png",
        "../assets/projects/project-11.png",
      ],
      title: "EduOn",
      caption: "Online knowledge platform",
      description: "Online knowledge platform",
      links: [
        {
          link: "https://github.com/sultonkul070/eduon",
          icon: <GitHubIcon />,
        },
        {
          link: "https://eduon.uz/",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "../assets/projects/project-20.png",
        "../assets/projects/project-21.png",
        "../assets/projects/project-22.png",
      ],
      title: "My Portfolio",
      caption: "Own resume portfolio",
      description: "Own resume portfolio",
      links: [
        {
          link: "https://www.github.com/Sultonkul070",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.facebook.com/SultonkulNortoylokov",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "../assets/projects/project-30.png",
        "../assets/projects/project-31.png",
        "../assets/projects/project-32.png",
      ],
      title: "Carter",
      caption: "Online e-commerce platform",
      description: "Online e-commerce platform",
      links: [
        {
          link: "https://www.github.com/Sultonkul070",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.facebook.com/SultonkulNortoylokov",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "../assets/projects/project-40.png",
        "../assets/projects/project-41.png",
        "../assets/projects/project-42.png",
      ],
      title: "Max Way",
      caption: "Birichi milliy fastfood",
      description: "Birichi milliy fastfood",
      links: [
        {
          link: "https://www.github.com/Sultonkul070",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.facebook.com/SultonkulNortoylokov",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "Node Js",
      images: [
        "../assets/projects/project-50.png",
        "../assets/projects/project-51.png",
        "../assets/projects/project-52.png",
      ],
      title: "Image Gallery",
      caption: "Mega image gallery",
      description: "Mega gallery where you can find images you want",
      links: [
        {
          link: "https://www.github.com/Sultonkul070",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.facebook.com/SultonkulNortoylokov",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
    {
      tag: "React",
      images: [
        "../assets/projects/project-60.png",
        "../assets/projects/project-61.png",
        "../assets/projects/project-62.png",
      ],
      title: "First Portfolio",
      caption: "My first portfolio",
      description:
        "My first simple portfolio which is made by HTML, CSS and JavaScript",
      links: [
        {
          link: "https://www.github.com/Sultonkul070",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.facebook.com/SultonkulNortoylokov",
          icon: <ArrowForwardIcon />,
        },
      ],
    },
  ],
};
