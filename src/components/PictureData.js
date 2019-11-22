import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureCard";

export default function PictureData() { // not anonymous if I want to export default
  const [picture, setPicture] = useState([]);

  const fetchData = () => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=Oqc7hOKvxfd33FCanW9WIBMUnu8sqrBKUlqGUhpI")
    .then(response => {
      console.log(response);
      setPicture(response.data);
    })
    .catch(error => console.log(error));
  };

  useEffect(fetchData, []);

  return (
    <PictureCard picture={ picture }/>
  )
};
