import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Endoscopycon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/faseven.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Endoscopy</h6>
                            <p>Endoscopy is a medical procedure that involves the use of an endoscope, which is a flexible tube with a camera and light source at the end, to examine the inside of the body. The procedure is often used to diagnose and treat problems in the digestive system, such as ulcers, tumors, or inflammation.

During an endoscopy, the endoscope is inserted through a natural opening in the body, such as the mouth, anus, or urethra, and then guided through the body to the area of interest. The camera on the end of the scope allows the doctor to see the inside of the body on a video monitor in real-time.</p>
                            <p>Depending on the area being examined, the procedure can be done with local anesthesia or sedation to help the patient relax and feel more comfortable. Endoscopy is a relatively safe and effective procedure with minimal risks, but it may cause some discomfort or side effects, such as a sore throat or bloating.</p>
                        
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
export default Endoscopycon;