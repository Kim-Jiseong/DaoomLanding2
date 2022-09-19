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
`;

export const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  overflow: hidden;
  margin: 0 auto;
  font-family: "Noto Serif KR", serif;
`;

export const MainBanner = styled.div`
  width: 100%;
  height: 100vh;
`;
export const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;
export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: grey; */
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15rem 8rem 15rem 8rem;
`;
export const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  white-space: nowrap;
`;
export const SubTitle = styled.div`
  font-size: 1.8rem;
  white-space: nowrap;
`;
export const Xline = styled.div`
  width: 50%;
  height: 1px;
  background-color: #252525;
`;
export const Story = styled.div`
  width: 100%;
  word-break: keep-all;
  font-weight: 400;
  font-size: 2rem;
  line-height: 200%;
  margin-bottom: 5rem;
`;

export const Body1 = styled.div`
  margin: 20rem 0 20rem 0;
  width: 100%;
  display: flex;
  height: 600px;
  /* display: block; */
  align-items: center;
  justify-content: space-between;
`;
export const PhotoWrapper = styled.div`
  width: 45%;
  /* max-width: 500px; */
  height: 100%;
  /* padding-bottom: 45%; */
`;
// export const ObjectPhoto = styled.div`
//     background-image: ${props => `url(${props.src})`};
//     background-size: cover;
//     background-position: 50%, 50%;
//     width: 100%;
//     height: 100% ;
//     max-width: 500px;
//     object-fit: cover;
//     position:absolute;
//     /* background-color: grey; */
// `
export const ObjectPhoto = styled.img`
  /* background-image: ${(props) => `url(${props.src})`};
    background-size: cover;
    background-position: 50%, 50%; */
  width: 45%;
  height: 100%;
  max-width: 600px;
  object-fit: cover;
  /* position:absolute; */
  /* background-color: grey; */
`;
export const NoteContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const SectionTitle = styled.div`
  width: 50%;
  font-size: 2.2rem;
  border-bottom: 1px solid #252525;
  font-weight: 500;
  margin-bottom: 4rem;
`;
export const NoteDivider = styled.div`
  width: 10%;
  height: 1px;
  display: flex;
  background: #252525;
  margin-bottom: 4rem;
  justify-self: end;
  align-self: end;
`;
export const NoteTitle = styled.div`
  font-size: 1.8rem;
  width: 100%;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: 0.03em;
  /* text-align: right; */
  word-break: keep-all;
  margin-bottom: 1.5rem;
`;
export const NoteContent = styled(NoteTitle)`
  font-size: 1.6rem;
  font-weight: 400;
`;
export const ProductContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  /* flex-wrap: nowrap; */
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;
  margin-bottom: 10rem;
`;
export const Productitem = styled.div`
  min-width: 30%;
  cursor: pointer;
  /* background-color: grey; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 0;
  transition: 0.3s;
  /* border: 1px solid red; */
  margin-right: 2rem;
  &:hover {
    background-color: #eee;
  }
`;
export const ProductPhoto = styled.img`
  width: 100%;
  height: 100%;
  /* padding-bottom: 200%; */
  object-fit: cover;
`;
export const ProductText = styled.div`
  font-family: "Alice", sans-serif;
  margin-bottom: 5rem;
  font-size: 1.8rem;
`;
export const InfoWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;
export const ContentPhoto = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`;
