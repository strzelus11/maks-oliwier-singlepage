import React from "react";

const VideoEmbed = ({
  videoId,
  maxWidth = "2000px",  // maksymalna szerokość na dużych ekranach
  borderColor = "black",
  borderWidth = "4px",
  padding = "20px",
}) => {
  const iframeStyle = {
    border: `${borderWidth} solid ${borderColor}`,
    borderRadius: "8px",
    width: "100%",
    height: "100%",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100vw",
          maxWidth: maxWidth,
          aspectRatio: "16/9", // zachowuje proporcje wideo
          margin: "0 auto",
        }}
      >
        <iframe
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
