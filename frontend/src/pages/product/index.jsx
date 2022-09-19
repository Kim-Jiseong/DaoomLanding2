import React, {useState,useRef, useEffect} from 'react'
import Header from '../../components/Header/index'
import * as S from "./style";
import Dots from "./components/Dots/Dots";
import Words from "./components/Words/Words";
import useMoveScroll from '../../hooks/refScroll'
import axios from "axios";
import anemoiImg from '../../assets/img/label/anemoi.svg';
import merlot from '../../assets/img/label/merlot.svg';
import dayDream from '../../assets/img/label/dayDream.svg';
import sandalWood from '../../assets/img/label/sandalWood.svg';
import mountainMeadow from '../../assets/img/label/mountainMeadow.svg';
import limonadier from '../../assets/img/label/limonadier.svg';
import serenity from '../../assets/img/label/serenity.svg';
import cloudCotton from '../../assets/img/label/cloudCotton.svg';
function Product() {
  const src = [
    "/videos/anemoi.mp4",
    "/videos/cloudCotton3.mp4",
    "/videos/sandalWood3.mp4"
  ]
  const outerDivRef = useRef(null);
  const [effectControl, setEffectControl] = useState(0)
  const [effect, setEffect] = useState(true)
  const [scrollIndex, setScrollIndex] = useState(0);
  const DIVIDER_HEIGHT = 5;
  let tDeltaY = 0
  useEffect(() => {

    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
          function templateDown(num){
            console.log("현재",num,"페이지, down");
              outerDivRef.current.scrollTo({
                top: pageHeight * num + DIVIDER_HEIGHT * num,
                left: 0,
                behavior: "smooth",
              });
            //   setTimeout(()=>{  
            //     setEffect(false)    
            //     setScrollIndex(num);  

            // }, 300)
            setScrollIndex(num);  
            setTimeout(()=>{  
                setEffectControl(num)
            }, 1000)

          }
          function templateUp(num){
          console.log("현재",num,"페이지, up");
              outerDivRef.current.scrollTo({
                top: pageHeight * (num - 2 ) + DIVIDER_HEIGHT * (num -2) ,
                left: 0,
                behavior: "smooth",
              });
              // setTimeout(()=>{
              //   setEffect(false)
              //   setScrollIndex(num - 2);

              // }, 300)
              setScrollIndex(num - 2);
              setTimeout(()=>{  
                setEffectControl(num - 2)
            }, 1000)
          }
      if (deltaY > 0 || tDeltaY > 0) {
        console.log("터치 내림", tDeltaY)
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        }
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          templateDown(2)
        } 
        else if (scrollTop >= pageHeight *2 && scrollTop < pageHeight * 3) {
          //현재 3페이지
          templateDown(3)
        } 
        else if (scrollTop >= pageHeight *3 && scrollTop < pageHeight * 4) {
          //현재 3페이지
          templateDown(4)
        } 
        else if (scrollTop >= pageHeight *4 && scrollTop < pageHeight * 5) {
          //현재 3페이지
          templateDown(5)
        } 
        else if (scrollTop >= pageHeight *5 && scrollTop < pageHeight * 6) {
          //현재 3페이지
          templateDown(6)
        } 
        else if (scrollTop >= pageHeight *6 && scrollTop < pageHeight * 7) {
          //현재 3페이지
          templateDown(7)
        } 
        else {
          // 현재 3페이지
          console.log("현재 마지막페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 0 + DIVIDER_HEIGHT * 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(0);
        }
      tDeltaY = 0
      // console.log("초기화", tDeltaY)
      } else if (deltaY < 0 || tDeltaY < 0){
        // 스크롤 올릴 때
        console.log("터치 올림", tDeltaY)
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 7 + DIVIDER_HEIGHT * 7 ,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(7);
        } 
        else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          templateUp(2)
        } 
        else if (scrollTop >= pageHeight *2 && scrollTop < pageHeight * 3) {
          //현재 2페이지
          templateUp(3)
        } 
        else if (scrollTop >= pageHeight *3 && scrollTop < pageHeight * 4) {
          //현재 2페이지
          templateUp(4)
        } 
        else if (scrollTop >= pageHeight * 4 && scrollTop < pageHeight * 5) {
          //현재 2페이지
          templateUp(5)
        } 
        else if (scrollTop >= pageHeight * 5 && scrollTop < pageHeight * 6) {
          //현재 2페이지
          templateUp(6)
        } 
        else if (scrollTop >= pageHeight * 6 && scrollTop < pageHeight * 7) {
          //현재 2페이지
          templateUp(7)
        } 
        else if (scrollTop >= pageHeight * 7 && scrollTop < pageHeight * 8) {
          //현재 2페이지
          templateUp(8)
        } 
        else {
          // 현재 3페이지
          templateUp(7)
        }
        tDeltaY = 0
        // console.log("초기화", tDeltaY)
      }
    };
    let startTouchY = 0
    const touchEnd = (e) => {
      // var x = event.touches[0].clientX;
      // var touchY = event.touches[0].clientY;
      // tDeltaY =  temp- touchY 
      // console.log(x, touchY, temp, tDeltaY)
      // wheelHandler(event)
      // temp = touchY
      let endTouchY = e.changedTouches[0].clientY;
      tDeltaY = startTouchY - endTouchY
      console.log("endTouch", tDeltaY, endTouchY)
      wheelHandler(e)
    }
    const touchStart = (e) =>{
      startTouchY = e.touches[0].clientY;
      console.log("start touch", startTouchY)
    }

    const scrollBtn = (event) => {
      console.log("눌림", event.key)
      if (event.key === 'ArrowUp'){
        tDeltaY= -200
        wheelHandler(event)
      }else if (event.key === 'ArrowDown'){
        tDeltaY = 200
        wheelHandler(event)
      }

      
    }
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    window.addEventListener("wheel", wheelHandler);
    // outerDivRefCurrent.addEventListener("touchstart", touchStart);
    // outerDivRefCurrent.addEventListener("touchend", touchEnd);
    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);
    window.addEventListener("keydown", scrollBtn);
    return () => {
      window.removeEventListener("wheel", wheelHandler);
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
      window.removeEventListener("keydown", scrollBtn);
    };
  }, []);


  return (
    <div>
      <Header></Header>
      
      <Dots scrollIndex={scrollIndex} />
      <S.Container ref={outerDivRef} id="container" className='outer'>

        <S.ContentContainer >
            <S.ContentWrapper>
              <S.ContentImg src={anemoiImg}/>
              <S.Title>Anemoi</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
            </S.ContentWrapper>

        </S.ContentContainer>

          <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={merlot}/>
              <S.Title>Merlot</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
          </S.ContentWrapper>
        </S.ContentContainer>
          <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={cloudCotton}/>
              <S.Title>Cloud Cotton</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>

          </S.ContentWrapper>
        </S.ContentContainer>
          <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={serenity}/>
              <S.Title>Serenity</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
          </S.ContentWrapper>
        </S.ContentContainer>
          <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={limonadier}/>
              <S.Title>Limonadier</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>

          </S.ContentWrapper>
        </S.ContentContainer>
        <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={dayDream}/>
              <S.Title>Day Dream</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
          </S.ContentWrapper>
        </S.ContentContainer>
        <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={sandalWood}/>
              <S.Title>Sandal Wood</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
          </S.ContentWrapper>
        </S.ContentContainer>
        <S.Divider/>
        <S.ContentContainer>
          <S.ContentWrapper>
              <S.ContentImg src={mountainMeadow}/>
              <S.Title>Mountain Meadow</S.Title>
              <S.Text><S.Line style={{marginRight:"1em"}}/> DAOOM <S.Line/></S.Text>
          </S.ContentWrapper>
        </S.ContentContainer>

      </S.Container>
      <Words scrollIndex={scrollIndex} ></Words>
      <S.LabelContainer></S.LabelContainer>
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={0} effectControl={effectControl} src="/videos/anemoi.mp4" loop autoPlay muted/>
      </S.VideoContainer> 
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={1} effectControl={effectControl} src="/videos/merlot.mp4" loop autoPlay muted/>
      </S.VideoContainer>
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={2} effectControl={effectControl} src="/videos/cloudCotton3.mp4" loop autoPlay muted/>
      </S.VideoContainer> 
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={3} effectControl={effectControl} src="/videos/serenity.mp4" loop autoPlay muted/>
      </S.VideoContainer>
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={4} effectControl={effectControl} src="/videos/limonadier.mp4" loop autoPlay muted/>
      </S.VideoContainer>
      <S.VideoContainer>  
        <S.Video scrollIndex={scrollIndex} num={5} effectControl={effectControl} src="/videos/dayDream.mp4" loop autoPlay muted/>
      </S.VideoContainer>
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={6} effectControl={effectControl} src="/videos/sandalWood.mp4" loop autoPlay muted/>
      </S.VideoContainer>
      <S.VideoContainer>
        <S.Video scrollIndex={scrollIndex} num={7} effectControl={effectControl} src="/videos/mountainMeadow2.mp4" loop autoPlay muted/>

      </S.VideoContainer>


    </div>
  )
}

export default Product