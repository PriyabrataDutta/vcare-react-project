import Header from './header';
import HeaderTop from './Header-top';
import MobileMenu from './Mobile-menu';
import Slider from './Slider';
import Footer from './Footer';
import Facilities from './Facilities';
import Fixscroller from './Fixscroll';
import ScrollTop from './Scrolltop';
import ScaningTest from './ScaningTest';
import Healthpackage from './Healthpackage';
import VissionAndMission from './VissionAndMission';
import BasicInfo from './Basicinfo';
import { useState } from 'react';
import Review from './Review';
import Mainscan from './mainscantext/MainScan';
import Scantestbut from './mainscantext/Scantestbut';
import HospitalInfo from './Hospitalinfo';
function Home(){
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
      <Slider/>
      <BasicInfo/>
      <HospitalInfo/>
      <Facilities/>
      <Fixscroller/>
      <ScaningTest/>
      <Healthpackage/>
      <VissionAndMission/>
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
export default Home;