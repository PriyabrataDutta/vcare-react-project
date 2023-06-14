import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
import Womencarelink from "../Womencarelink";
function Obstetricscon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/woone.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Obstetrics</h6>
                            <p>Obstetrics is the branch of medicine that focuses on the care of women during pregnancy, childbirth, and the postpartum period. Obstetricians are medical doctors who specialize in managing the health of pregnant women and their unborn babies, as well as providing care during and after childbirth.

Obstetrics includes a range of medical services, including prenatal care, ultrasound scans, labor and delivery, and postpartum care. Prenatal care involves monitoring the health of the mother and the development of the fetus throughout pregnancy. Ultrasound scans are used to visualize the fetus and assess its growth and well-being.</p>
                            <p>During labor and delivery, obstetricians and other healthcare professionals are responsible for managing the safe delivery of the baby and the well-being of the mother. This may involve monitoring the mother's vital signs, administering pain relief medication, and performing medical interventions such as cesarean sections or vacuum extractions.

Postpartum care involves monitoring the health of the mother and the newborn in the weeks and months after childbirth. This may include assessing breastfeeding, checking for postpartum depression, and providing medical treatment if complications arise.</p>
<p>Overall, obstetrics plays a crucial role in ensuring the health and well-being of mothers and their newborn babies.</p>
                        
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
                                <div className="facititle">
                                    <h6>Obstetrics</h6>
                                </div>
                                <Womencarelink/>
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
export default Obstetricscon;