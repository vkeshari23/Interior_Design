"use client"

import React, { useState } from "react";
import "./navbar.css"
import { RiHome5Line } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";

function FloatingBallMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number): void => {
    setActiveIndex(index);
  };

  const navItems = [
    { text: "Home", icon: <RiHome5Line /> },
    { text: "About", icon: <HiOutlineUserGroup /> },
    { text: "Service", icon: <MdDesignServices /> },
    { text: "Project", icon: <GrProjects /> },
    { text: "Contact", icon: <IoCallOutline /> },
  ];

  return (
    <div className="navigation">
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <a href="#">
              <span className="icon">
                <span className="ion-icon">{item.icon}</span>
              </span>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
        <div className="indicator"></div>
      </ul>
    </div>
  );
}

export default FloatingBallMenu;


// ------------------------------------  Magic menu typescript code start---------------------------------------

// import React, { useState } from "react";
// import { IoMdNotificationsOutline } from 'react-icons/io';
// import { AiOutlineHome } from 'react-icons/ai';
// import { CiLogout } from 'react-icons/ci';
// import { BsCamera } from 'react-icons/bs';
// import { CgProfile } from 'react-icons/cg';

// function Magicmenu(): JSX.Element {
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   const handleItemClick = (index: number): void => {
//     setActiveIndex(index);
//   };

//   const navItems = [
//     { text: "Home", icon: <AiOutlineHome/> },
//     { text: "Profile", icon: <CgProfile/> },
//     { text: "Notification", icon: <IoMdNotificationsOutline/> },
//     { text: "Camera", icon: <BsCamera/> },
//     { text: "Logout", icon: <CiLogout/> },
//   ];

//   return (
//     <div className="navigation">
//       <ul>
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className={`list ${index === activeIndex ? "active" : ""}`}
//             onClick={() => handleItemClick(index)}
//           >
//             <a href="#">
//               <span className="icon">
//                 <span className="ion-icon">{item.icon}</span>
//               </span>
//               <span className="text">{item.text}</span>
//             </a>
//           </li>
//         ))}
//         <div className="indicator"></div>
//       </ul>
//     </div>
//   );
// }

// export default Magicmenu;


// ------------------------------------  Magic menu typescript code end---------------------------------------