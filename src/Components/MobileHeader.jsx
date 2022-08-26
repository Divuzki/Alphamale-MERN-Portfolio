import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
/***
@param links Array
*/
const linkVariants = {
  opened: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};
const menuVariants = {
  opened: {
    opacity: 1,
    top: 20,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 1.2,
    },
  },
  closed: {
    opacity: 0,
    top: "5vh",
  },
};
const MobileHeader = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);
  const [scale, setScale] = React.useState(0);
  const getVpdr = () => {
    const html = document.documentElement;
    const vph = Math.pow(html.offsetHeight, 2); // Height
    const vpw = Math.pow(html.offsetWidth, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    const circle = document.getElementById("bg-circle");
    const circleWidth = circle ? circle.clientWidth : 80;
    console.log(circle.clientWidth);
    return (vpd * 2) / circleWidth; // Circle radius
  };
  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    if (isOpen === true) {
      setScale(getVpdr());
      setShowNav(true);
    } else {
      setScale(0);
      setTimeout(() => {
        setShowNav(false);
      }, 100);
    }
    window.onresize = () => {
      if (isOpen === true) {
        setScale(getVpdr());
      }
    };
  }, [isOpen]);
  return (
    <React.Fragment>
      <button
        className={`navbar-toggle${isOpen === true ? " active" : ""}`}
        onClick={openMenu}
        id="toggle"
        type="button"
      >
        <svg viewBox="0 0 100 100" className="w-12 h-full">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
      <motion.div
        initial={"closed"}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        className={`navbar w-full h-full left-0 ml-6 sm:ml-24 my-16 ${
          showNav === true ? "" : "inactive"
        }`}
      >
        <ul>
          {links.map((n, idx) => (
            <motion.li
              variants={linkVariants}
              initial="closed"
              animate="opened"
              onClick={openMenu}
              transition={{ duration: 1 }}
              key={idx}
            >
              <Link data-text={`${idx + 1}`} to={`/${n.to}`}>
                {n.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div id="bg-circle" style={{ transform: `scale(${scale})` }}></div>
    </React.Fragment>
  );
};

export default MobileHeader;
