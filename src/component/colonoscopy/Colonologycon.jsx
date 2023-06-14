import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Colonologycon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/faeight.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Colonoscopy</h6>
                            <p>Colonoscopy is a medical procedure used to examine the inside of the large intestine (colon) and rectum. During a colonoscopy, a long, flexible tube called a colonoscope is inserted through the rectum and guided through the colon. The colonoscope has a camera and a light at the end, which allows the doctor to view the inside of the colon on a video monitor.

Colonoscopy is typically used as a diagnostic tool to detect and evaluate abnormalities such as polyps, ulcers, inflammation, and cancer in the colon and rectum. It may also be used to screen for colon cancer and to monitor individuals with a history of colon polyps or cancer.</p>
                            <p>The preparation for a colonoscopy involves clearing the colon of fecal matter by following a special diet and taking laxatives or enemas. The procedure is typically performed under sedation or anesthesia, and patients may experience some discomfort or cramping during the procedure. Recovery time is usually short, and patients can resume normal activities within a day or two.

Colonoscopy is generally considered a safe and effective procedure, but there are some risks, including bleeding, perforation (tear) of the colon, and adverse reactions to anesthesia or sedation. It is important for patients to discuss the risks and benefits of colonoscopy with their doctor before undergoing the procedure.




</p>
                        
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
export default Colonologycon