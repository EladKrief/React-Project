import React from "react";
import { ImgForPages } from "../Components/Img";
export default function HomePage() {
  return (
    <>
      <h1>Elad Krief- React Project</h1>
      <h1>Card Home page</h1>
      {ImgForPages.imgForHome}
      <p> this is Home Page</p>
    </>
  );
}
export { HomePage };
