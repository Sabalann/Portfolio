import React, { useState, useEffect } from "react";

const roles = [
  { label: "Front-end Developer", icon: "🖌️", color: "#007BFF" },
  //{ label: "Full-stack Developer", icon: "🌐", color: "#28A745" },
  //{ label: "Backend Developer", icon: "⚙️", color: "#FD7E14" },
  { label: "Game Developer", icon: "🕹️", color: "#6F42C1" },
  { label: "Artist", icon: "🎨", color: "#DC3545" },
  { label: "Student", icon: "🧑‍🎓", color: "#4CAF50"},
  { label: "Gamer", icon: "🎮", color: "#FF5722"},
];

const Intro = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Enable transition effect
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTransitioning(false); // Disable transition effect after update
      }, 800); // Match duration of CSS transition
    }, 2000); // Time interval for automatic scrolling

    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[currentRoleIndex];
  const prevRole = roles[(currentRoleIndex - 1 + roles.length) % roles.length];
  const nextRole = roles[(currentRoleIndex + 1) % roles.length];

  return (
    <h1 className="intro-text font-semibold select-none ">
      <h2>Hi, I'm Sabalan and I'm a{" "}</h2>
      <div className="role-container px-4 w-full min-w-max">
        <div
          className={`roles-wrapper min-w-96 ${isTransitioning ? "smooth-scroll" : ""}`}
        >
          {/* Previous role */}
          <span className="role-text opacity-20 block">
          {prevRole.label} {prevRole.icon} 
          </span>

          {/* Current role */}
          <span className="role-text block" style={{ color: currentRole.color }}>
          {currentRole.label} {currentRole.icon} 
          </span>

          {/* Next role */}
          <span className="role-text opacity-20 block">
          {nextRole.label} {nextRole.icon} 
          </span>
        </div>
      </div>
    </h1>
  );
};

export default Intro;
