import { useRef,useEffect,useState } from "react";
import { Link } from "react-router-dom";

function Footer(props){
    window.addEventListener('scroll',()=>{
        if(window.innerWidth<992){
            if(visible===true){
                props.setFoot("none");
            }else{
                props.setFoot("block");
            }
        }else{
            props.setFoot("none")
        }
    })
    window.addEventListener('scroll',()=>{
        if(window.innerWidth>992){
            if(visible===true){
                props.setScanButton("none")
            }else{
                props.setScanButton("block")
            }
        }else{
            if(visible===true){
                props.setScanButton("none");
            }else{
                props.setScanButton("block");
            }
        }
    })
    const myref=useRef();
    const [visible, setVisible]=useState();
    useEffect(()=>{
        const observer=new IntersectionObserver((enter)=>{
            const entery=enter[0];
            setVisible(entery.isIntersecting)
        })
        observer.observe(myref.current);
    },[])
    return (<>
<div ref={myref}>
    <div className="contain">
    </div>
    <div className="section-foot">
        <div className="container">
            <div className="foot">
                <div className="footbody">
                    <h6>DIRECT LIKE</h6>
                    <ul>
                        <li><Link to="/"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Home</Link></li>
                        <li><Link to="/about"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>About Us</Link></li>
                        <li><Link to="/ultrasound"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Our Facilities</Link></li>
                        <li><Link to=""><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Health Packages</Link></li>
                        <li><Link to=""><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Our Doctors</Link></li>
                        <li><Link to=""><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Gallery</Link></li>
                        <li><Link to=""><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Contact US</Link></li>
                    </ul>
                </div>
                <div className="footbody">
                    <h6>FACILITIES</h6>
                    <ul>
                        <li><Link to="/ultrasound"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Ultrasound Scan</Link></li>
                        <li><Link to="/threefour"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>3D & 4D Scan</Link></li>
                        <li><Link to="/twodecho"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>2D Echo</Link></li>
                        <li><Link to="/ecg"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>ECG</Link></li>
                        <li><Link to="/digitalxay"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Digital X-Ray</Link></li>
                        <li><Link to="/cliniclab"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Clinical Laboratory</Link></li>
                        <li><Link to="/endoscopy"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Endoscopy</Link></li>
                        <li><Link to="/colonoscopy"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Colonoscopy</Link></li>
                    </ul>
                </div>
                <div className="footbody">
                    <h6>HEALTH PACKAGES</h6>
                    <ul>
                        <li><Link to="/healthpack"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Health Checkup</Link></li>
                        <li><Link to="/healthpack"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Female Health</Link></li>
                        <li><Link to="/healthpack"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Male Health</Link></li>
                        <li><Link to="/healthpack"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Master Health</Link></li>
                        <li><Link to="/healthpack"><span className="whiter"><img src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt=""/></span>Diabetic Health</Link></li>
                    </ul>
                </div>
                <div className="footbody">
                    <h6>GET IN TOUCH</h6>
                    <ul>
                        <li><a className="topper" href=""><span className="whiter"><img src="photo/location-pin.png" alt=""/></span><div>Shop No. 1, Jai Maruthi Convention Hall Building, Magadi Main Rd, near Bank Of Baroda (E Vijaya), Muthuraya Swamy Extension, Sunkadakatte, Bengaluru, Karnataka 560091</div></a></li>
                        <li><a href=""><span className="whiter"><img src="photo/phone-call.png" alt=""/></span><div>90351 22020</div></a></li>
                        <li><a href=""><span className="whiter"><img src="photo/email-1.png" alt=""/></span><div>vcarescan@gmail.com</div></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footfoot">
            <div className="subfoot">
                <a href=""><img  className="whiter-img" src="photo/copyright.png" alt="" /></a>
                <div className="center">
                <a href="https://appaddindia.com/">V Care Scan Centre & Laboratory, Design By<span> Appaddindia.com</span></a>
                </div>
            </div>
            <div>
                <ul>
                    <a href=""><img  className="whiter-img" src="photo/facebook (1).png" alt="" /></a>
                    <a href=""><img  className="whiter-img" src="photo/instagram.png" alt="" /></a>
                    <a href=""><img  className="whiter-img" src="photo/social.png" alt="" /></a>
                    <a href=""><img  className="whiter-img" src="photo/twitter (1).png" alt="" /></a>
                </ul>
            </div>
        </div>
</div>
    </>)
}
export default Footer;
        