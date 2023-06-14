import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Cliniclabcon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/fasix.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Clinical Laboratory</h6>
                            <p>A clinical laboratory is a medical facility where laboratory tests are performed on patient samples to diagnose and monitor various medical conditions. Clinical laboratories are an essential component of modern healthcare, providing critical information to healthcare providers to aid in diagnosis, treatment, and management of patient care.

Clinical laboratories can perform a wide range of tests on a variety of patient samples, including blood, urine, stool, and tissue samples. These tests can be used to diagnose a range of medical conditions, including infections, genetic disorders, autoimmune diseases, and cancer.</p>
                            <p>Some of the most common types of tests performed in a clinical laboratory include,

Blood tests, which can be used to measure cholesterol, glucose, and other substances in the blood.
Urine tests, which can be used to detect urinary tract infections, kidney disease, and other conditions.
Microbiology tests, which can be used to identify and test for bacterial, viral, and fungal infections.
Pathology tests, which can be used to diagnose cancer and other diseases by examining tissue samples.
Clinical laboratories use a variety of sophisticated equipment and techniques to perform these tests, including automated analyzers, microscopes, and molecular diagnostic technologies.

Results of laboratory tests are usually available within a few days and are provided to the healthcare provider who ordered the test. The healthcare provider then uses this information to diagnose and treat the patient's medical condition.</p>
                        
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
export default Cliniclabcon;