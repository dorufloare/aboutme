import React from 'react';
import "../globals.css";

export default function TitleSection() {
  return (
    <section className="titleSection">
      <div className="title-div">
        <h1 className=" slide-left-to-right title">Hi, I'm <span className="glow"> <br/>Doru Floare</span> </h1>
        <h2 className="short-description typewriter fade-in">  </h2>
      </div>
      <img className="fade-in myPhoto" src="/images/me-tr.png" alt="myImage"></img>
    </section>
  );
}