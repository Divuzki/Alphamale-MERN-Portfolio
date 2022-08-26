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
    msg: `Donner du goût ? de la couleur aux applications, je le fais
        afin de rendre vos sites attrayants ?. Avant de devenir
        webdesigner, depuis tout petit j'étais déjà familier à la
        couleur et du dessin.`,
    optionsIcon: <FilmReelIcon className="w-6 h-6 fill-emerald-400" />,
  },
  {
    skill: "Photography",
    icon: <PhotographyIcon className="w-6 h-6 fill-blue-500" />,
    color: "blue",
    msg: `Donner du goût ? de la couleur aux applications, je le fais
        afin de rendre vos sites attrayants ?. Avant de devenir
        webdesigner, depuis tout petit j'étais déjà familier à la
        couleur et du dessin.`,
    optionsIcon: <CameraLensIcon className="w-6 h-6 fill-indigo-400" />,
  },
  {
    skill: "Videography",
    icon: <VideographyIcon className="w-6 h-6 fill-pink-500" />,
    color: "pink",
    msg: `Donner du goût ? de la couleur aux applications, je le fais
        afin de rendre vos sites attrayants ?. Avant de devenir
        webdesigner, depuis tout petit j'étais déjà familier à la
        couleur et du dessin.`,
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
