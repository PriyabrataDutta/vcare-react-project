import Header from './header';
import HeaderTop from './Header-top';
import MobileMenu from './Mobile-menu';
import Footer from './Footer';
import ScrollTop from './Scrolltop';
import AboutBanner from './Aboutbanner';
import HospitalInfo from './Hospitalinfo';
import { useState } from 'react';
import VissionAndMission from './VissionAndMission';
import Review from './Review';
import Callusgetapp from './Callustogetapp';
import Mainscan from './mainscantext/MainScan';
import Scantestbut from './mainscantext/Scantestbut';
function About(){
  const [foot, setFoot]=useState("none");
  const [disnone,setDisnone]=useState("none");
  const [navbar, setNavbar]=useState("flex");
  const [scan, setScan]=useState("none");
  const [scanButton, setScanButton]=useState("block");
    return(
        <>
      <div className='headbody'>
      <HeaderTop/>
      <Header dis={disnone} setDis={setDisnone} na={navbar} setNa={setNavbar}/>
      <AboutBanner/>
      <HospitalInfo/>
      <Callusgetapp/>
      <VissionAndMission/>
      <Review/>
      {/* <Sliderp/> */}
      <Footer foot={foot} setFoot={setFoot} scanButton={scanButton} setScanButton={setScanButton}/>
      </div>
      {/* <ScrollTop/> */}
      <ScrollTop/>
      <MobileMenu dis={disnone} setDis={setDisnone} na={navbar} setNa={setNavbar}/>
      <Mainscan scan={scan} setScan={setScan}/>
      <Scantestbut scan={scan} setScan={setScan}  foot={foot} setFoot={setFoot} scanButton={scanButton} setScanButton={setScanButton}/>
        </>
    )
}
export default About;