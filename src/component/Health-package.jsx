import Header from './header';
import HeaderTop from './Header-top';
import MobileMenu from './Mobile-menu';
import Footer from './Footer';
import ScrollTop from './Scrolltop';
import Healthpackage from './Healthpackage';
import { useState } from 'react';
import Review from './Review';
import Callusgetapp from './Callustogetapp';
import Heailhpackagebanner from './Healthpackagebanner';
import Mainscan from './mainscantext/MainScan';
import Scantestbut from './mainscantext/Scantestbut';
function Healthpackagepage(){
  const [foot, setFoot]=useState("none");
  const [disnone,setDisnone]=useState("none");
  const [navbar, setNavbar]=useState("flex");
  const [scan, setScan]=useState("none");
  const [scanButton, setScanButton]=useState("block")
    return(
        <>
        <div className='headbody'>
      <HeaderTop/>
      <Header dis={disnone} setDis={setDisnone} na={navbar} setNa={setNavbar}/>
      <Heailhpackagebanner/>
      <Healthpackage/>
      <Callusgetapp/>
      {/* <Sliderp/> */}
      <Review/>
      <Footer foot={foot} setFoot={setFoot} scanButton={scanButton} setScanButton={setScanButton}/>
      </div>
      <ScrollTop/>
      <MobileMenu dis={disnone} setDis={setDisnone} na={navbar} setNa={setNavbar}/>
      <Mainscan scan={scan} setScan={setScan}/>
      <Scantestbut scan={scan} setScan={setScan}  foot={foot} setFoot={setFoot} scanButton={scanButton} setScanButton={setScanButton}/>
      </>
    )
}
export default Healthpackagepage;