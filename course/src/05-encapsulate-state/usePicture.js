import { useState, useEffect } from "react";

const fetchPicture = async (date, setPicture) => {
  console.log("fetchPicture start executing...");

  try {
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    );

    let json = await response.json();

    setPicture(json);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const usePicture = (date) => {
  console.log("usePicture start executing...");

  let [picture, setPicture] = useState();

  console.log(picture);

  useEffect(() => {
    fetchPicture(date, setPicture);
  }, [date]);

  return picture;
};
