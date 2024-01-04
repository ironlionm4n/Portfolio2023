import React from "react";

export const YouTubeEmbed = ({ videoId, cname }) => {
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      title="GMO YouTube"
      className={cname}
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
