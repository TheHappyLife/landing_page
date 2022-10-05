import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
const VideoWrapper = styled("div")(() => ({
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  backgroundColor: "#000",
}));

const Video = styled("video")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)",
}));

const setVideoSize = () => {
  const video = document.querySelector("video");
  console.log("resized");
  if (video) {
    const body = document.querySelector("body");
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

const BackgroundVideo = ({ link, ...videoProps }) => {
  const [muted, setMuted] = useState(true);
  const innitEventsFunction = () => {
    setVideoSize();
    window.addEventListener("resize", setVideoSize);
  };
  useEffect(innitEventsFunction);
  return (
    <VideoWrapper>
      <Video {...videoProps} muted={muted}>
        <source src={link} />
      </Video>
      <IconButton
        className="toggleSoundMode"
        onClick={() => setMuted(!muted)}
        style={{ position: "absolute", right: "20px", top: "20px" }}
      >
        {(muted && (
          <VolumeOffIcon
            style={{ color: "#fff", fontSize: "3rem", opacity: "0.7" }}
          />
        )) ||
          (!muted && (
            <VolumeUpIcon
              style={{ color: "#fff", fontSize: "3rem", opacity: "0.7" }}
            />
          ))}
      </IconButton>
    </VideoWrapper>
  );
};
export default BackgroundVideo;
