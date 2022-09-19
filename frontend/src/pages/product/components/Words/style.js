import styled, { css, keyframes } from "styled-components";
const FadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity:1;
  }
`;
export const Info = styled.div`
  width: 100%;
  text-align: center;
  color: #f8f8f8;
  position: absolute;
  font-weight: 400;
  bottom: 4rem;
  font-size: 1.8rem;
  z-index: 1;
  animation: ${FadeIn} 1.2s;
`;
