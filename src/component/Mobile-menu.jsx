import { useEffect, useState } from "react";
import valuea from './header'
import { Link } from "react-router-dom";

function MobileMenu(props){
    const [disback, setDidback]=useState("none")
    const [trues, setTrues]=useState(true);
    const [disbackon, setDidbackon]=useState("none")
    const [trueson, setTrueson]=useState(true);
    let stylechanger={
        display:`${props.dis}`,
    }
    function submenudis(){
        if(trues===true){
            setDidback("block");
            setTrues(!trues);
        }else{
            setDidback("none");
            setTrues(!trues);
        }
    }
    function submenudisone(){
        if(trueson===true){
            setDidbackon("block");
            setTrueson(!trueson);
        }else{
            setDidbackon("none");
            setTrueson(!trueson);
        }
    }
    let disbacker={
        display:`${disback}`
    }
    let disbackerone={
        display:`${disbackon}`
    }
    function displaynone(){
        props.setDis("none");
        props.setNa("flex");
        }
    window.addEventListener('resize',()=>{
        if(window.innerWidth>992){
            props.setDis("none");
        }
    })
    return (<>
    <div className="Mobile-menu" style={stylechanger}>
        <div><button onClick={displaynone} className="backbutton"><h6>Back</h6><span className="mobile-icon"><img src="photo/next (1).png" alt="" /></span></button></div>
        <div className="overmenu">
            <ul className="mobilelike">
                <li><Link className="lier" to="/">Home</Link></li>
                <li><Link className="lier" to="/about">About Us</Link></li>
                <li onClick={submenudis}><Link className="link-menu lier" to="">Facilities<span className="mobile-icon"><img src="photo/next (1).png" alt="" /></span></Link>
                <ul className='mob-submenu' style={disbacker}>
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
                <li><Link to="/healthpack">Health Packages</Link></li>
                <li><Link to="/ourdoctor">Our Doctors</Link></li>
                <li onClick={submenudisone} ><Link className="link-menu lier" to="">OB-GYN<span className="mobile-icon"><img src="photo/next (1).png" alt="" /></span></Link>
                <ul className='mob-submenu' style={disbackerone}>
                        <li><Link to="/obstetrics">Obstetrics</Link></li>
                        <li><Link to="/gynaecology">Gynaecology</Link></li>
                        <li><Link to="/fetal">Fetal Medicine</Link></li>
                    </ul>
                </li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact US</Link></li>
            </ul>
        </div>
        <div></div>
    </div>
    </>)
}
export default MobileMenu;