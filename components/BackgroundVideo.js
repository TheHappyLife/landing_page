import { Button, styled } from "@mui/material";
import { useEffect } from "react";

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
  console.log("resized");
  const body = document.querySelector("body");
  const video = document.querySelector("video");
  const isLarge = body.clientWidth / body.clientHeight >= 16 / 9;
  if (isLarge) {
    video.style.width = "100vw";
    video.style.height = "initial";
  } else {
    video.style.width = "initial";
    video.style.height = "100vh";
  }
};
const enableSound = () => {
  console.log('>>>enable sound');
  document.querySelector('video').muted = !(document.querySelector('video').muted);
}
const innitEventsFunction = () => {
    console.log('loaded');
    setVideoSize();
    document.querySelector('video').muted = false;
    document.querySelector('button').addEventListener('click', enableSound);
    window.addEventListener("resize", setVideoSize);
};
const BackgroundVideo = ({ link, ...videoProps }) => {
  useEffect(innitEventsFunction);
  return (
    <VideoWrapper>
      <Video {...videoProps} muted>
        <source src={link} />
      </Video>
      <Button>Sound</Button>
    </VideoWrapper>
  );
};
export default BackgroundVideo;
