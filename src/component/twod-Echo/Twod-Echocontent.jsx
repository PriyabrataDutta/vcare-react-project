import { Link } from "react-router-dom";
import Linkbox from "../Linkbox";
import LazyLoad from "react-lazy-load";
function TwodEchocontent(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/fatwo.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>2D Echo</h6>
                            <p>A 2D echo, also known as a two-dimensional echocardiogram, is a non-invasive diagnostic test that uses ultrasound waves to create images of the heart in real time. It is used to evaluate the size, shape, and function of the heart, as well as the movement and thickness of the heart's walls and valves.

During the procedure, a technician places a small handheld device called a transducer on the chest, which emits high-frequency sound waves that bounce off the heart and create images on a computer monitor. The images can show the different chambers and structures of the heart, the flow of blood through the heart, and any abnormalities or defects in the heart's structure or function.</p>
                            <p>The procedure is painless and usually takes about 30-45 minutes to complete. It does not require any special preparation, although patients may be asked to avoid eating or drinking for a few hours before the test. Results of the test are usually available immediately and can be reviewed by a cardiologist or other healthcare provider.</p>
                        
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
export default TwodEchocontent;