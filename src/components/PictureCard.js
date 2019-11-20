import React from "react";

const PictureCard = (props) => {
  return (
    <div>
      <h2>Date: {props.picture.date}</h2>
      <img src={props.picture.url} alt={props.picture.title}></img>
      <h2>Picture Title: {props.picture.title}</h2>
      <h2>Author: {props.picture.copyright}</h2>
      <h2>Explanation: {props.picture.explanation}</h2>
    </div>
  );
};

export default PictureCard;