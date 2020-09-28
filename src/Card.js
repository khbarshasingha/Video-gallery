import React from "react";
import ReactPlayer from "react-player";
import Cardlist from "./Cardlist";

const Card = ({ title, src, link }) => {
  return (
    <article class="bg-washed-green  center ba b--black-10 mv4 mw6 br4">
      <div class="pv2 ph3">
        <h1 class="f6 ttu tracked link dim lh-title">{title}</h1>
      </div>
      <ReactPlayer url={src} controls class="mw6" />
      <div class="pa3">
        <a href={link} class="link dim lh-title">
          Here's to a text based description
        </a>
      </div>
    </article>
  );
};
export default Card;
