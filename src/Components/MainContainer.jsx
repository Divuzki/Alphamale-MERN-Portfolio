import React from "react";
import Animate from "../Animate";
import GalleryGrid from "./GalleryGrid";
import HomeComponent from "./HomeComponent";
import SkillComponent from "./SkillComponent";

const MainContainer = () => {
  return (
    <Animate>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HomeComponent />
        <GalleryGrid />
        <SkillComponent />
      </div>
    </Animate>
  );
}

export default MainContainer;
