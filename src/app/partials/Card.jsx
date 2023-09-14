import React from 'react';
import "../globals.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
          <img src={props.image} alt="Card Image" />
      </div>
      <div class="card-description">
          <p>{props.achievement}</p>
      </div>
    </div>
  );
}