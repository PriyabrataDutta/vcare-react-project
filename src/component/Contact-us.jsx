import Header from './header';
import HeaderTop from './Header-top';
import MobileMenu from './Mobile-menu';
import Footer from './Footer';
import ScrollTop from './Scrolltop';
import { useState } from 'react';
import Contactbanner from './ContactUsBanner';
import Map from './Contact/Map';
import ContactForm from './Contact/Contactform';
import Mainscan from './mainscantext/MainScan';
import Scantestbut from './mainscantext/Scantestbut';
function Contact(){
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
      <Contactbanner/>
      <ContactForm/>
      {/* <Sliderp/> */}
      <Map/>
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
export default Contact;