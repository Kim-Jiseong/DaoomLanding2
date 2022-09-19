import * as S from "./style";

const Words = ({ scrollIndex }) => {
    return (
      <div>
        {(scrollIndex === 0) && <S.Info> "지중해 해변가에서 느끼는 시원한 바람" </S.Info>}
        {(scrollIndex === 1) && <S.Info>"프랑스 와인 농장에서의 축제"</S.Info>}
        {(scrollIndex === 2) && <S.Info>"포근한 구름에 몸을 맡기듯"</S.Info>}
        {(scrollIndex === 3) && <S.Info>"따뜻하고 몽환적인 자연의 향"</S.Info>}
        {(scrollIndex === 4) && <S.Info>"부드럽게 청량한 레몬 칵테일"</S.Info>}
        {(scrollIndex === 5) && <S.Info>"부드러운 봄의 향기"</S.Info>}
        {(scrollIndex === 6) && <S.Info>"낙엽지듯 불어오는 은은한 숲의 향"</S.Info>}
        {(scrollIndex === 7) && <S.Info>"광활한 자연에서의 휴식"</S.Info>}

      </div>
      
      
    );
};
  
export default Words;