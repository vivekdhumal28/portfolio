import React, { useState } from "react";
import "./Header.css";
import logoImage from "../img/namelogo.jpg";
import ScrollText from "./ScrollText";
import Confetti from "react-confetti";

function Header() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHireButtonClick = () => {
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
      window.location.href = "mailto:vivekdhumal.28@gmail.com";
    }, 6000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close the sidebar when clicking outside
  document.addEventListener("click", (event) => {
    if (isSidebarOpen) {
      if (
        !event.target.closest(".sidebar") &&
        !event.target.closest(".hamburger")
      ) {
        closeSidebar();
      }
    }
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeSidebar(); // Close the sidebar on mobile devices
    }
  };

  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="hamburger" onClick={toggleSidebar}>
          {isSidebarOpen ? "" : "☰"}
        </div>
        <ul>
          <li>
            <p onClick={() => scrollToSection("home")}>Home</p>
          </li>
          <li>
            <p onClick={() => scrollToSection("about")}>About</p>
          </li>
          <li>
            <p onClick={() => scrollToSection("project")}>Project</p>
          </li>
          <li>
            <p onClick={() => scrollToSection("contact")}>Contact</p>
          </li>
        </ul>
      </div>
      <header className="header">
        <div className="left-section">
          <div className="hamburger" onClick={toggleSidebar}>
            {isSidebarOpen ? "✕" : "☰"}
          </div>
        </div>
        <div className="middle-section">
          <img src={logoImage} alt="Your Logo" />
        </div>
        <div className="right-section">
          <button className="hire-button" onClick={handleHireButtonClick}>
            Hire
          </button>
        </div>
      </header>
      {showConfetti && (
        <div className="confetti-container">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <div>
        <ScrollText />
      </div>
    </>
  );
}

export default Header;

// import React, { useState } from "react";
// // eslint-disable-next-line no-unused-vars
// import { Link } from "react-router-dom";
// import "./Header.css";
// import logoImage from "../img/namelogo.jpg";

// import ScrollText from "./ScrollText";
// import Confetti from "react-confetti";

// function Header() {
//   const [showConfetti, setShowConfetti] = useState(false);

//   const handleHireButtonClick = () => {
//     setShowConfetti(true);

//     setTimeout(() => {
//       setShowConfetti(false);

//       // Redirect to  email application
//       window.location.href = "mailto:vivekdhumal.28@gmail.com";
//     }, 6000);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="left-section">
//           <nav className="navbar">
//             <ul>
//               <li>
//                 <p onClick={() => scrollToSection("home")}>Home</p>
//               </li>
//               <li>
//                 <p onClick={() => scrollToSection("about")}>About</p>
//               </li>
//               <li>
//                 <p onClick={() => scrollToSection("project")}>Project</p>
//               </li>
//               <li>
//                 <p onClick={() => scrollToSection("contact")}>Contact</p>
//               </li>
//             </ul>
//           </nav>
//         </div>
//         <div className="middle-section">
//           <img src={logoImage} alt="Your Logo" />
//         </div>
//         <div className="right-section">
//           <button className="hire-button" onClick={handleHireButtonClick}>
//             Hire
//           </button>
//         </div>
//       </header>
//       {showConfetti && (
//         <div className="confetti-container">
//           <Confetti width={window.innerWidth} height={window.innerHeight} />
//         </div>
//       )}
//       <div>
//         <ScrollText />
//       </div>
//     </>
//   );
// }

// export default Header;
