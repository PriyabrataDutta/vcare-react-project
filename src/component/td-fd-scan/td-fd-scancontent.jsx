import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Threefourcon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/fathree.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>3D & 4D Scan</h6>
                            <p>A 3D scan is a medical imaging technique that uses ultrasound waves to create three-dimensional images of a fetus in the womb. The procedure is similar to a traditional 2D ultrasound, but instead of creating a flat, two-dimensional image, a 3D scan creates a three-dimensional image that shows more detail and depth. A 3D scan can be used to diagnose certain fetal abnormalities and can also provide a more realistic view of the fetus for parents.

A 4D scan is similar to a 3D scan but adds the dimension of time, creating a moving, real-time video of the fetus. This allows parents to see the movements and behavior of the fetus in real time, such as yawning, blinking, and sucking their thumb. 4D scans are typically used for entertainment purposes and are not typically used for medical diagnosis.</p>
                            <p>Both 3D and 4D scans are non-invasive and do not use radiation, making them safe for both the mother and the fetus. The procedure usually takes between 30 and 60 minutes, and the images or video can be saved and shared with family and friends.

While 3D and 4D scans can provide a more detailed and realistic view of the fetus, they are not necessary for routine prenatal care. They are usually only recommended if there is a suspected fetal abnormality or if parents want a more detailed view of their baby. The decision to have a 3D or 4D scan should be made in consultation with a healthcare provider.</p>
                        
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
export default Threefourcon;