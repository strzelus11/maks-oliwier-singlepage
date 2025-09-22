import React from "react";

const VideoEmbed = ({
  videoId,
  width = "700px",
  height = "315px",
  style = {},
  borderColor = "black",
  borderWidth = "4px",
  padding = "20px", // new prop for padding
}) => {
  const iframeStyle = {
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: "8px",
    ...style,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",  // centers horizontally
        padding: "100px",                   // adds padding around the video
        marginBottom: "20px",
      }}
    >
      <div style={{ width, height }}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          style={iframeStyle}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;
