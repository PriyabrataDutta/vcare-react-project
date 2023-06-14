import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Digitalxraycon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/fafour.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Digital X-Ray</h6>
                            <p>Digital X-ray, also known as computed radiography (CR), is a medical imaging technique that uses digital sensors to capture and create detailed images of the inside of the body. It is a non-invasive diagnostic tool that uses low levels of ionizing radiation to create images that can be used to diagnose and monitor a range of medical conditions.

Digital X-ray technology has replaced traditional film-based X-rays in many medical facilities, as it provides faster image acquisition, better image quality, and the ability to easily store and transmit digital images.

During a digital X-ray procedure, a patient is positioned between the X-ray machine and a digital sensor. The machine emits a small amount of radiation, which passes through the body and is absorbed by the digital sensor. The sensor then converts the radiation into an electronic signal, which is processed by a computer to create a detailed image of the area being examined.</p>
                            <p>Compared to traditional film-based X-rays, digital X-rays offer several advantages, including lower radiation exposure, faster image acquisition, and the ability to easily store and transmit images. However, digital X-rays are still a form of ionizing radiation and should only be used when medically necessary.

Patients undergoing a digital X-ray should inform their healthcare provider if they are pregnant or may be pregnant, as radiation exposure can potentially harm a developing fetus.</p>
                        
                        </div>
                        </div>
                    </div>
                    <div className="consecond">
                        <div className="innerbox">
                            <div className="innerboxfirst">
                                <div className="facititle">
                                    <h6>Facilities</h6>
                                </div>
                                <Linkbox/>
                            </div>
                            <div className="innerboxfirst">
                            <div className="facititle confaci">
                                    <h6>Contact Us</h6>
                                </div>
                                <ul className="facilist confaci">
                                    <li><a to="" className="font"><span className="faciimg"><img src="photo/placeholder.png" alt="" /></span><div> Shop No. 1, Jai Maruthi Convention Hall Building, Magadi Main Rd, near Bank Of Baroda (E Vijaya), Muthuraya Swamy Extension, Sunkadakatte, Bengaluru, Karnataka 560091</div></a></li>
                                    <li><a href="tel:" className="font"><span className="faciimg"><img src="photo/phone-call.png" alt="" /></span><div>90351 22020</div></a></li>
                                    <li><a to="" className="font"><span className="faciimg"><img src="photo/email-1.png" alt="" /></span><div>vcarescan@gmail.com</div></a></li>
                               </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default Digitalxraycon;