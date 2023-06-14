import Header from '../header';
import HeaderTop from '../Header-top';
import MobileMenu from '../Mobile-menu';
import Footer from '../Footer';
import { useState } from 'react';
import ScrollTop from '../Scrolltop';
import TwodEchobanner from './Twod-Echobanner';
import TwodEchocontent from './Twod-Echocontent';
import Mainscan from '../mainscantext/MainScan';
import Scantestbut from '../mainscantext/Scantestbut';
function TwodEcho(){
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
      <TwodEchobanner/>
      <TwodEchocontent/>
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
export default TwodEcho;