import React from "react";
import gameStyles from "../Games/Games.module.css";

const Game = ({ heading, text, title, hrefLink, srcLink }) => {
  return (
    <div className={gameStyles.gameDetails}>
      <h2>{heading}</h2>
      <iframe src={srcLink} className={gameStyles.itchEmbed} title={title}>
        <a href={hrefLink}>GMO by ironlionm4n</a>
      </iframe>
      {text}
    </div>
  );
};

export default Game;
