import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Ecgcon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/fafive.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>ECG</h6>
                            <p>ECG stands for electrocardiogram, which is a medical test that measures the electrical activity of the heart. It is a non-invasive diagnostic tool that is used to detect abnormalities in the heart's rhythm and function.

During an ECG procedure, electrodes are placed on the skin of the chest, arms, and legs, which detect and record the electrical signals generated by the heart. These signals are then displayed as a graph, which shows the different stages of the heart's electrical cycle and any abnormalities or irregularities in the heart's rhythm.</p>
                            <p>An ECG is a painless and non-invasive procedure that typically takes only a few minutes to complete. There is no special preparation required, although patients may be asked to avoid eating or drinking for a few hours before the test. Results of the test are usually available immediately and can be reviewed by a healthcare provider.

ECGs are a valuable tool for diagnosing and monitoring heart conditions, and they are commonly used in a variety of healthcare settings, including hospitals, clinics, and doctor's offices.</p>
                        
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
export default Ecgcon;