import React from "react";
import pageStyles from "./Pages.module.css";
import gameStyles from "../Games/Games.module.css";
import { YouTubeEmbed } from "../Videos/YouTubeEmbed";
import { chibaText, gmoText, jelloFelloText } from "../Games";
import Game from "../Games/Game";

export const GameDevPortfolio = () => {
  return (
    <div className={pageStyles.outerContainer}>
      <div className={pageStyles.baseContainer}>
        <div className={gameStyles.gameContainer}>
          <YouTubeEmbed videoId="qSp8BiXppH0" cname={gameStyles.youtubeVideo} />
          <Game
            heading={"GMO - Unity 2D Platformer"}
            text={gmoText}
            hrefLink={"https://ironlionm4n.itch.io/gmo"}
            title={"GMO Itch Embed"}
            srcLink={"https://itch.io/embed/1925210"}
          />
        </div>
        <div style={{ border: "1px dashed white" }} />
        <div className={gameStyles.gameContainer}>
          <YouTubeEmbed videoId="qSp8BiXppH0" cname={gameStyles.youtubeVideo} />
          <Game
            heading={"Chiba - Unity 2D Puzzle Game"}
            text={chibaText}
            hrefLink={"https://ironlionm4n.itch.io/chiba"}
            title={"Chiba Itch Embed"}
            srcLink={"https://itch.io/embed/1712047"}
          />
        </div>
        <div style={{ border: "1px dashed white" }} />
        <div className={gameStyles.gameContainer}>
          <YouTubeEmbed videoId="WTkErrWt-cc" cname={gameStyles.youtubeVideo} />
          <Game
            heading={"Jello Fello - Mobile Casual Game"}
            text={jelloFelloText}
            hrefLink={"https://noahschultz.itch.io/jello-fellos"}
            title={"Jello Fello Itch Embed"}
            srcLink={"https://itch.io/embed/2399496"}
          />
        </div>
      </div>
    </div>
  );
};
