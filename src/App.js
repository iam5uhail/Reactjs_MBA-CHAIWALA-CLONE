import React from 'react'
import Introvideo from './components/Introvideo'
import Section from './components/Section'
import data from "./data/data.json"
import freshTopicImg from "./images/academy.png"
import freshTopic2Img from "./images/story.png"
import tedTalksImg from "./images/in-the-news.gif"
import franchiseImg from "./images/franchise.gif"
import mapImg from "./images/locations.png"
import coursesImg from "./images/image2.png"
import albumImg from "./images/mba-cares.gif"
import baratImg from "./images/image1.png"
import chaiwalaImg from "./images/image3.png"
import Footer from "./components/Footer"
import Misc from "./components/Misc"

import "./styles/App.css"
import "./styles/intro.css"
import "./styles/section.css"
import "./styles/Footer.css"
import "./styles/Misc.css"
import "./styles/MediaQuery.css"

const yellow="#fff100",
pink="#ed1e79",
white="#fff",
brown="#6d3d0f"

const App = () => {
  const {freshTopic,freshTopic2,tedTalks,franchise,map,courses,album,barat,chaiwala} = data;

  return (
    <div>
      <Introvideo/>
      {/* FreshTopic */}
      <Section h3={freshTopic.heading} text={freshTopic.text} btnTxt={freshTopic.btn} imgSrc={freshTopicImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnColor={pink} btnBgColor={yellow}/>
      {/* Freshtopics2 */}
      <Section h3={freshTopic2.heading} text={freshTopic2.text} btnTxt={freshTopic2.btn} imgSrc={freshTopic2Img} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnColor={pink} btnBgColor={yellow}/>
      {/* Ted talks */}
      <Section h3={tedTalks.heading} text={tedTalks.text} btnTxt={tedTalks.btn} imgSrc={tedTalksImg} backgroundColor={yellow} headingColor={pink} textColor={pink} btnColor={yellow} btnBgColor={pink}/>
      {/* franchise */}
      <Section h3={franchise.heading} text={franchise.text} btnTxt={franchise.btn} imgSrc={franchiseImg} backgroundColor={white} headingColor={pink} textColor={brown} btnColor={yellow} btnBgColor={brown}/>
      {/* map */}
      <Section h3={map.heading} text={map.text}  imgSrc={mapImg} backgroundColor={pink} headingColor={yellow} textColor={yellow}  btnColor={brown} btnBgColor={yellow} hasBtn={false}/>
      {/* courses */}
      <Section h3={courses.heading} text={courses.text} btnTxt={courses.btn} imgSrc={coursesImg} imgSize={"30%"} backgroundColor={yellow} headingColor={pink} textColor={pink} btnColor={yellow} btnBgColor={pink}/>
      {/* album */}
      <Section h3={album.heading} text={album.text} btnTxt={album.btn} imgSrc={albumImg} backgroundColor={white} headingColor={pink} textColor={brown} btnColor={yellow} btnBgColor={brown}/>
      {/* barat */}
      <Section h3={barat.heading} text={barat.text} btnTxt={barat.btn} imgSrc={baratImg} backgroundColor={pink} headingColor={yellow} textColor={yellow} btnColor={pink} btnBgColor={yellow}/>
      {/* chaiwala */}
      <Section h3={chaiwala.heading} text={chaiwala.text} btnTxt={chaiwala.btn} imgSrc={chaiwalaImg} backgroundColor={white} headingColor={pink} textColor={brown} btnColor={yellow} btnBgColor={brown}/>
      <Footer/>
      <Misc data-cursorpointer={true}/>
    </div>
  )
}

export default App

