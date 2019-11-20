import React from "react";

const PictureCard = ( {picture} ) => {
  return (
    <div>
      <h3>Date: {picture.date}</h3>
      <img src={picture.url} alt={picture.title}></img>
      <h3>Picture Title: {picture.title}</h3>
      <h3>Author: {picture.copyright}</h3>
      <h3>Explanation: {picture.explanation}</h3>
    </div>
  );
};

export default PictureCard;