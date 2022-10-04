import styled from "styled-components";
import { useEffect } from "react";

const VideoWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
`;
const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const BackgroundVideo = ({link, ...videoProps}) => {
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
  const innitResizeEventHandlingFunction = () => {
    setVideoSize();
    window.addEventListener("resize", setVideoSize);
  };
  useEffect(innitResizeEventHandlingFunction);
  return (
    <VideoWrapper>
      <Video {...videoProps} src={link}/>
    </VideoWrapper>
  );
};
export default BackgroundVideo;
