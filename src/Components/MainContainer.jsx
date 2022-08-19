import React from "react";
import GalleryGrid from "./GalleryGrid";
import HireFormComponent from "./HireFormComponent";
import HomeComponent from "./HomeComponent";
import SkillComponent from "./SkillComponent";

function MainContainer() {
  return (
    <React.Fragment>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <HomeComponent />
        <GalleryGrid />
        <SkillComponent />
        <HireFormComponent />
      </div>
    </React.Fragment>
  );
}

export default MainContainer;
