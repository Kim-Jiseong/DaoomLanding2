import * as S from "./style";
const Dot = ({ num, scrollIndex, name }) => {
  return (
    <div
      style={{
        // width: 10,
        // height: 10,
        // border: "1px solid black",
        fontFamily: "Alice, sans-serif",
        fontSize: "1.4rem",
        // fontWeight: scrollIndex === num ? "700" : "400",
        color: scrollIndex === num ? "#f8f8f8" : "#495057",
        transitionDuration: 1000,
        transition: "background-color 0.5s",
        lineHeight: "1.8rem",
        letterSpacing: "0.2em",
        marginTop: "0.6rem",
      }}
    >
      {name}
    </div>
  );
};

const Dots = ({ scrollIndex }) => {
  return (
    <S.Case>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          // width: 20,
          // height: 100,
        }}
      >
        <Dot
          num={0}
          scrollIndex={scrollIndex}
          // onClick={setScrollIndex(0)}
          name="Anemoi"
        ></Dot>
        <Dot num={1} scrollIndex={scrollIndex} name="Merlot"></Dot>
        <Dot num={2} scrollIndex={scrollIndex} name="Cloud Cotton"></Dot>
        <Dot num={3} scrollIndex={scrollIndex} name="Serenity"></Dot>
        <Dot num={4} scrollIndex={scrollIndex} name="Limonadier"></Dot>
        <Dot num={5} scrollIndex={scrollIndex} name="Daydream"></Dot>
        <Dot num={6} scrollIndex={scrollIndex} name="Sandal Wood"></Dot>
        <Dot num={7} scrollIndex={scrollIndex} name="Moutain Meadow"></Dot>
      </div>
    </S.Case>
  );
};

export default Dots;
