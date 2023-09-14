"use client"

import React from 'react';
import "../globals.css";

function scrollToBottom() {
  const element = document.getElementById('phoneNumber');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function AboutMeSection() {
  return (
    <section className="aboutMeSection">
      <div className="aboutMe-div">
        <h1 className="secondary-title"> About Me</h1>
        <h2 className="description">
        Hi, I'm a student at National College "Liviu Rebreanu" in Bistrita, Romania. I started programming at the age of 12, initially in C++. I soon ventured into competitive programming, achieving significant milestones.
        </h2>
        <h2 className="description">
        Parallelly, I discovered my passion for web, app, and game development. Creating websites became my forte. I'm all about crafting visually stunning and seamlessly functional online experiences that would greatly enhance your business's image.
        </h2>
        <h2 className="description" style={{fontWeight:600}}>
          If you are ready to take your business to the next level 
          <span className="contactMeLink" onClick={scrollToBottom}>
            Contact Me
          </span>
        </h2>
      </div>
    </section>
  );
} 