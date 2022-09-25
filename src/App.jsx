import React from "react";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import HireFormComponent from "./Components/HireFormComponent";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { InitialTransition } from "./Animate";
import AuthComponent from "./Components/Admin/auth";

const App = () => {
  const [firstMount, setFirstMount] = React.useState(false);
  if (firstMount === false) {
    setFirstMount(true);
    localStorage.setItem("new_user", true);
  }
  const location = useLocation();
  return (
    <AnimatePresence mode={"wait"}>
      <motion.section exit={{ opacity: 0 }}>
        {firstMount === true && (
          <InitialTransition setFirstMount={setFirstMount} />
        )}

        <Header indexPage={location.pathname === "/" && true} />
        <div className="mt-[6rem] md:mt-[6.5rem]">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainContainer />} />
            <Route path="/pages/hire" element={<HireFormComponent />} />
            <Route path="/auth/*" element={<AuthComponent />} />
          </Routes>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default App;
