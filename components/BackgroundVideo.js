import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const Video = styled("video")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)",
}));

const volumeCss = {
  color: "#fff",
  fontSize: "3rem",
  opacity: "0.7",
};

const setVideoSize = () => {
  const video = document.querySelector("video");
  if (video) {
    const body = document.querySelector('body');
    const isLarge = body.clientWidth / body.clientHeight >= 16 / 9;
    if (isLarge) {
      video.style.width = "100vw";
      video.style.height = "initial";
    } else {
      video.style.width = "initial";
      video.style.height = "100vh";
    }
    video = null;
  }
};

const BackgroundVideo = ({ link, handleVideoEnded, ...videoProps }) => {
  const [muted, setMuted] = useState(true);
  const innitEventsFunction = () => {
    setVideoSize();
    window.addEventListener("resize", setVideoSize);
    return () => window.removeEventListener("resize", setVideoSize);
  };

  useEffect(innitEventsFunction, []);
  return (
    <Box>
      <Video {...videoProps} muted={muted} onEnded={(e) => handleVideoEnded(e)}>
        <source src={link} />
      </Video>
      <IconButton
        onClick={() => setMuted(!muted)}
        sx={{ position: "absolute", right: "20px", top: "20px" }}
      >
        {!muted && <VolumeUpIcon sx={volumeCss} />}
        {muted && <VolumeOffIcon sx={volumeCss} />}
      </IconButton>
    </Box>
  );
};
export default BackgroundVideo;
