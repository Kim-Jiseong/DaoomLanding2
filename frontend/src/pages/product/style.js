import styled, { css, keyframes } from "styled-components";
import Slider from "react-slick";
const FadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
`;
const FadeOut = keyframes` 
  0% {
    opacity: 1;
  }
  100% {
    opacity:0;
  }
`;
const SlideDown = keyframes` 
  0% {
    transform: translate( 0, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow-y: scroll;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  font-family: "Alice", sans-serif;
  /* background-color: grey; */
  clip: rect(
    calc(30vh - 5px),
    calc(65vw + 0px),
    calc(70vh + 0px),
    calc(35vw + 0px)
  );
  /* clip: rect(20px,600px,200px,200px); */
  @media screen and (max-width: 520px) {
    clip: rect(
      calc(30vh - 5px),
      calc(95vw + 0px),
      calc(70vh + 0px),
      calc(5vw + 0px)
    );
  }
`;
export const VideoContainer = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Video = styled.video`
  /* @media screen and (max-aspect-ratio: 1920/1080) {
    width: auto;
    height: 100vh;
  } */
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: 0.5s;
  /* display: none; */
  /* animation: ${FadeIn} 1s; */
  ${(props) =>
    props.scrollIndex !== props.num &&
    //  && (props.scrollIndex !== props.effectControl)
    css`
      /* display:none; */
      /* animation: ${FadeOut} 1s; */
    `}
  ${(props) =>
    props.scrollIndex === props.num &&
    //  && (props.scrollIndex !== props.effectControl)
    css`
      opacity: 1;
    `} /* ${(props) =>
    props.scrollIndex !== props.num &&
    props.scrollIndex === props.effectControl &&
    css`
      display: none;
    `}  */
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `} */
  /* background-color: green; */
`;
export const ContentWrapper = styled.div`
  width: 30%;
  height: 40vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* overflow: hidden; */
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;
export const ContentImg = styled.img`
  width: 30%;
  height: auto;
`;
export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  text-align: center;
`;
export const Text = styled.div`
  width: 80%;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1em;
  margin-top: 1.4rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const LabelContainer = styled.div`
  width: 30%;
  height: 40vh;
  background-color: #f8f8f8;
  position: fixed;
  /* position: absolute; */
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 5px));
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`;
export const YB = styled.div`
  width: 100%;
  height: 600px;
`;
export const Divider = styled.div`
  width: 100%;
  height: 5px;
`;
export const Line = styled.div`
  width: 10%;
  height: 1px;
  background-color: #252525;
`;
export const Info = styled.div`
  width: 100%;
  text-align: center;
  color: #f8f8f8;
  position: absolute;
  font-weight: 400;
  bottom: 4rem;
  z-index: 3;
  font-size: 1.8rem;
`;
