import styled, { css, keyframes } from "styled-components";
const SlideDown = keyframes` 
  0% {
    transform: translate( 0, -100%);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity:1;
  }
`

export const Container = styled.div`
    width:80%;
    min-height: 100vh;
    margin:0 auto;
`
export const MainBanner = styled.div`
    width: 100%;
    height: 80vh;
`
export const MainPhoto= styled.img`
    width: 100%;
    height:100%;
    object-fit: cover;
`