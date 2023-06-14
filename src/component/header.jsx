import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
function Header(props){
    const [chaneposition, setChangeposition]=useState("relative")
    function scrollheder() {
        if(window.scrollY>100){
            setChangeposition("fixed")
            console.log("hello");
        }else{
            setChangeposition("relative")
        }
    }
    window.addEventListener('scroll',scrollheder);
    let positionfix={
        position:`${chaneposition}`,
        justifyContent:"space-around",
        top:0,
        display:`${props.na}`
    }
    window.addEventListener('resize',()=>{
        if(window.innerWidth>992){
            props.setNa("flex")
        }
    })
    function changeDis(){
        props.setDis("block")
        props.setNa("none")
    }
    return (<>
    <div className="header" style={positionfix}>
        <div>
            <div>
                <Link to="/">
                    <div className="logoa"><img src="photo/vcare.png" alt="" /></div>
                </Link>
            </div>
        </div>
        <div>
            <ul className="heder-menu">
                <li className='hometitle'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hometitle'>
                    <Link to="/about">About Us</Link>
                </li>
                <li className='hometitle'>
                    <Link to="">Facilities</Link>
                    <ul className='submenu'>
                        <li><Link to="/ultrasound">Ultrasound Scan with Color Doppler</Link></li>
                        <li><Link to="/twodecho">2D Echo</Link></li>
                        <li><Link to="/threefour">3D & 4D Scan</Link></li>
                        <li><Link to="/digitalxay">Digital X-Ray</Link></li>
                        <li><Link to="/ecg">ECG</Link></li>
                        <li><Link to="/cliniclab">Clinical Laboratory</Link></li>
                        <li><Link to="/endoscopy">Endoscopy</Link></li>
                        <li><Link to="/colonoscopy">Colonoscopy</Link></li>
                        <li><Link to="/consultant">Consultant</Link></li>
                    </ul>
                </li>
                <li className='hometitle'>
                    <Link to="/healthpack">Health Packages</Link>
                </li>
                <li className='hometitle'>
                    <Link to="/ourdoctor">Our Doctors</Link>
                </li>
                <li className='hometitle'>
                    <Link to="">OB-GYN</Link>
                    <ul className='submenu'>
                        <li><Link to="/obstetrics">Obstetrics</Link></li>
                        <li><Link to="/gynaecology">Gynaecology</Link></li>
                        <li><Link to="/fetal">Fetal Medicine</Link></li>
                    </ul>
                </li>
                <li className='hometitle'>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li className='hometitle'>
                    <Link to="/contact">Contact US</Link>
                </li>
            </ul>
            <button className="menu-button" onClick={changeDis}>
                <img src="photo/menu.png" alt="" />
            </button>
        </div>
    </div>
    </>);
}
export default Header;