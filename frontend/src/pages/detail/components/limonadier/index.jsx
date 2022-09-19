import React, { useState, useEffect } from "react";
import limonadierMain from "../../../../assets/img/product/main/limonadierMain.jpg";
import limonadierObject from "../../../../assets/img/product/object/limonadier.png";
import limonadierContent from "../../../../assets/img/product/content/limonadier.jpg";
import limonadierContent3 from "../../../../assets/img/product/content/limonadier3.jpg";
import * as S from "./style";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Limonadier() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <S.MainBanner>
        <S.MainPhoto src={limonadierMain} />
      </S.MainBanner>
      <S.Container>
        <S.TitleContainer>
          <S.Xline data-aos="fade-left"></S.Xline>
          <S.TitleWrapper data-aos="fade-up">
            <S.SubTitle>부드럽게 청량한 레몬 칵테일</S.SubTitle>
            <S.Title>Limonadier</S.Title>
          </S.TitleWrapper>
          <S.Xline data-aos="fade-right"></S.Xline>
        </S.TitleContainer>
        <S.Story data-aos="fade-up">
          데이드림 향의 키워드는 ‘생명력과, 따스함입니다’. 봄날의 오전에
          느껴지는 풍부한 풀내음과 태양빛으로 가열된 따뜻한 공기는 우리 몸에
          활기찬 기운을 듬뿍 불어넣어주는데요, 항상 주변에 밝은 기운과 따뜻한
          웃음을 전파하는 Inf의 특징을 모티브로 제작되었습니다.
        </S.Story>

        <S.Body1>
          {/* <S.PhotoWrapper> */}
          <S.ObjectPhoto
            data-aos="fade-left"
            src={limonadierObject}
          ></S.ObjectPhoto>
          {/* </S.PhotoWrapper> */}
          <S.NoteContainer>
            <S.SectionTitle data-aos="fade-right">Note</S.SectionTitle>
            <S.NoteTitle data-aos="fade-right">
              top: orange, lemon, lime, apple
            </S.NoteTitle>
            <S.NoteContent data-aos="fade-left">
              봄 향의 달달함을 잔뜩 머금은 달콤한 과일향이 나는 베르가못과
              부드럽고 산뜻한 꽃 향을 내는 라벤더와 만다린으로 시작합니다.
            </S.NoteContent>
            <S.NoteDivider data-aos="fade-right" />
            <S.NoteTitle data-aos="fade-right">
              middle: orange, lemon, lime, apple
            </S.NoteTitle>
            <S.NoteContent data-aos="fade-left">
              봄 향의 달달함을 잔뜩 머금은 달콤한 과일향이 나는 베르가못과
              부드럽고 산뜻한 꽃 향을 내는 라벤더와 만다린으로 시작합니다.
            </S.NoteContent>
            <S.NoteDivider data-aos="fade-right" />
            <S.NoteTitle data-aos="fade-right">
              bottom: white musk, amber, ceder wood
            </S.NoteTitle>
            <S.NoteContent data-aos="fade-left">
              잔향으로 남는 베이스노트는 자연 생명력을 머금은 삼나무인
              시더우드와 따뜻하면서 달콤한 바닐라 그리고 이 향들의 냄새를 한층
              더 강화해주는 앰버 그리스의 조합으로 마무리 됩니다. 앰버 그리스는
              특히 바닐라랑 합쳐지면 달달함이 산뜻한 달달함으로 강화되며
              풍부해지는데요. 이 향은 생명력, 그리고 산뜻한 따스함으로
              마무리됩니다.
            </S.NoteContent>
            <S.NoteDivider data-aos="fade-right" />
          </S.NoteContainer>
        </S.Body1>
        <S.Xline
          style={{ width: "100%", margin: "0 auto", backgroundColor: "#eee" }}
        ></S.Xline>
        <S.Body1>
          <S.InfoWrapper data-aos="fade-left">
            <S.ContentPhoto src={limonadierContent3}></S.ContentPhoto>
            <S.NoteContainer style={{ width: "100%" }}>
              <S.SectionTitle>Info</S.SectionTitle>
              <S.NoteTitle>용량</S.NoteTitle>
              <S.NoteContent>50ml</S.NoteContent>
              <S.NoteTitle>사이즈</S.NoteTitle>
              <S.NoteContent>40mm X 108mm</S.NoteContent>
              <S.NoteTitle>전성분</S.NoteTitle>
              <S.NoteContent>에탄올, 향료, 정제수</S.NoteContent>
              <S.NoteTitle>사용방법</S.NoteTitle>
              <S.NoteContent>
                옷자락 또는 목 부분에 가볍게 도포해 사용
              </S.NoteContent>
            </S.NoteContainer>
          </S.InfoWrapper>

          {/* <S.PhotoWrapper> */}
          <S.ObjectPhoto
            data-aos="fade-right"
            src={limonadierContent}
          ></S.ObjectPhoto>
          {/* </S.PhotoWrapper> */}
        </S.Body1>

        <S.Xline
          style={{ width: "100%", margin: "0 auto", backgroundColor: "#eee" }}
        ></S.Xline>

        <S.TitleContainer>
          <S.Xline data-aos="fade-left"></S.Xline>
          <S.TitleWrapper
            style={{ margin: "5rem 8rem 5rem 8rem" }}
            data-aos="fade-up"
          >
            <S.Title>Daoom perfume line</S.Title>
          </S.TitleWrapper>
          <S.Xline data-aos="fade-right"></S.Xline>
        </S.TitleContainer>
        <S.ProductContainer>
          <S.Productitem>
            <S.ProductPhoto src={limonadierObject}></S.ProductPhoto>
            <S.ProductText>Limonadier</S.ProductText>
          </S.Productitem>
          <S.Productitem>
            <S.ProductPhoto src={limonadierObject}></S.ProductPhoto>
            <S.ProductText>Limonadier</S.ProductText>
          </S.Productitem>
          <S.Productitem>
            <S.ProductPhoto src={limonadierObject}></S.ProductPhoto>
            <S.ProductText>Limonadier</S.ProductText>
          </S.Productitem>
          <S.Productitem>
            <S.ProductPhoto src={limonadierObject}></S.ProductPhoto>
            <S.ProductText>Limonadier</S.ProductText>
          </S.Productitem>
          <S.Productitem>
            <S.ProductPhoto src={limonadierObject}></S.ProductPhoto>
            <S.ProductText>Limonadier</S.ProductText>
          </S.Productitem>
        </S.ProductContainer>
      </S.Container>
    </div>
  );
}

export default Limonadier;
