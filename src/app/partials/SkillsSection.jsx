"use client"

import React from 'react';
import "../globals.css";
import SmallCard from './SmallCard';

export default function SkillsSection() {
  return (
    <section className="skillsSection">
      <h1 className="skills-title"> My Skills </h1>
      <div className="cardsDiv">
        <SmallCard
          skill="HTML"
          image="/images/html.svg"
        />
        <SmallCard
          skill="CSS"
          image="/images/css.svg"
        />
        <SmallCard
          skill="JavaScript"
          image="/images/js.svg"
        />
        <SmallCard
          skill="Wordpress"
          image="/images/wordpress.svg"
        />
        <SmallCard
          skill="React"
          image="/images/react.svg"
        />
        <SmallCard
          skill="Next.js"
          image="/images/next.png"
        />
     
        <SmallCard
          skill="C++"
          image="/images/c++.svg"
        />
        <SmallCard
          skill="C#"
          image="/images/cs.svg"
        />
        <SmallCard
          skill="Qt"
          image="/images/qt.svg"
        />
        <SmallCard
          skill="Java"
          image="/images/java.svg"
        />
        <SmallCard
          skill="MongoDB"
          image="/images/mongodb.svg"
        />
        <SmallCard
          skill="Typescript"
          image="/images/typescript.svg"
        />
    </div>
    </section>
  );
};

