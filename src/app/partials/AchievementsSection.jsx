import React from 'react';
import "../globals.css";
import Card from "./Card";

export default function AchievementsSection() {
  return (
    <section className="achievementsSection">
    
      <div>
      <h1 className="achievemnts-title"> My Greatest Achievements </h1>
      </div>
      
      <div className="achievementsDiv">
        <Card 
          achievement="Gold medal at International Orogramming Contest Info(1)Cup" 
          image="/images/trophy.png"
        />
        <Card 
          achievement="Qualification for the Romanian National Competitive Programming Team" 
          image="/images/ro.png"
        />
        <Card 
          achievement="1st Place for 6 years in a row at the National Olympiad of Informatics, Regional phase" 
          image="/images/gold.png"
        />
        <Card 
          achievement="5 Silver and 1 Bronze medal at the National Olympiad of Informatics, National phase" 
          image="/images/silver.png"
        />
      </div>

    </section>
  );
}