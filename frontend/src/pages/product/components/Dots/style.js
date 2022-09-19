import styled, { css, keyframes } from "styled-components";

export const Case = styled.div`
    position: fixed;
    z-index: 2;
    bottom: 4rem;
    right: 6rem;
    @media screen and (max-width: 700px) {
      display: none;
    }
`