import React from 'react';
import "../globals.css";

export default function SmallCard(props) {
  return (
    <div className="small-card">
      <div className="card-image">
          <img src={props.image} alt="Card Image" />
      </div>
      <div class="card-description">
          <p>{props.skill}</p>
      </div>
    </div>
  );
}