import React from "react";
import PhotographyIcon from "../svgs/photographer.svgr.svg";
import CinematographyIcon from "../svgs/cinematography.svgr.svg";
import VideographyIcon from "../svgs/videography.svgr.svg";

import FilmReelIcon from "../svgs/film-reel.svgr.svg";
import CameraLensIcon from "../svgs/camera-lens.svgr.svg";
import PlayIcon from "../svgs/play.svgr.svg";

export const skillsList = [
  {
    skill: "Cinematography",
    icon: <CinematographyIcon className="w-6 h-6 fill-green-500" />,
    color: "green",
    msg: `A cinematographer, also known as a Director of Photography, is in charge of the camera and the lighting crew. We will responsible for the photographing or recording of a film, television production, music video or other live action piece.`,
    optionsIcon: <FilmReelIcon className="w-6 h-6 fill-emerald-400" />,
  },
  {
    skill: "Photography",
    icon: <PhotographyIcon className="w-6 h-6 fill-blue-500" />,
    color: "blue",
    msg: `We works closely with clients to capture photos of people, places and things through the use of 
    creativity and technical abilities in photographic equipment and photo manipulation software.`,
    optionsIcon: <CameraLensIcon className="w-6 h-6 fill-indigo-400" />,
  },
  {
    skill: "Videography",
    icon: <VideographyIcon className="w-6 h-6 fill-pink-500" />,
    color: "pink",
    msg: `Working with creative teams and clients to plan video shoots. 
    Setting up and taking down cameras, microphones, lighting, props and other equipment. 
    Editing footage after recording. Adding computer graphics, closed captioning and special effects to footage.`,
    options: [
      "brand awareness videos",
      "event videography",
      "product videos",
      "documentry films",
      "wedding videography",
      "drone videography",
    ],
    optionsIcon: <PlayIcon className="w-6 h-6 fill-red-400" />,
  },
];

export const NavLinks = [
  {
    name: "Home",
    to: "",
    button: false,
  },
  {
    name: "My Work",
    to: "work",
    button: false,
  },
  {
    name: "Skills",
    to: "skills",
    button: false,
  },
  {
    name: "Make Inquiries",
    to: "pages/hire",
    button: true,
    className: "px-6 py-2 bg-theme font-bold text-[11px]",
  },
];
