
import Linkbox from "./Linkbox";
import LazyLoad from "react-lazy-load";

function UltrasoundContent(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                            <img src="photo/faone.jpg" alt="" />
                            </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Ultrasound Scan with Color Doppler</h6>
                            <p>An ultrasound scan, also known as sonography, is a medical imaging technique that uses high-frequency sound waves to create images of internal body structures. Ultrasound scans are commonly used to visualize internal organs such as the liver, spleen, pancreas, kidneys, and bladder, as well as to monitor fetal development during pregnancy.</p>
                            <p>During an ultrasound scan, a handheld device called a transducer is used to emit high-frequency sound waves into the body. These sound waves bounce off internal structures and are then detected by the transducer, which converts the information into an image that can be viewed on a screen.

Ultrasound scans are non-invasive and generally painless, making them a safe and popular diagnostic tool. They are often used to diagnose conditions such as tumors, cysts, and gallstones, as well as to guide medical procedures such as biopsies and needle aspirations.</p>
                            <p></p>
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
export default UltrasoundContent;