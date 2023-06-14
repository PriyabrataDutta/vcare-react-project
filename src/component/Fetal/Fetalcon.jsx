import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
import Womencarelink from "../Womencarelink";
function Fetalcon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/wothree.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Fetal Medicine</h6>
                            <p>Fetal medicine is a branch of medicine that specializes in the diagnosis, treatment, and management of medical conditions in unborn babies (fetuses). Fetal medicine specialists, also known as fetal medicine doctors, are trained to provide medical care for both the mother and the developing fetus during pregnancy.</p>
                            <p>Fetal medicine involves a range of diagnostic and therapeutic techniques, including ultrasound scans, fetal echocardiography, amniocentesis, chorionic villus sampling (CVS), and fetal surgery. These techniques can be used to detect and manage a wide range of medical conditions and abnormalities in the fetus, such as congenital heart defects, neural tube defects, chromosomal abnormalities, and fetal growth restriction.

Fetal medicine doctors work closely with obstetricians, neonatologists, and other healthcare professionals to provide comprehensive care for both the mother and the fetus. They may collaborate with these professionals to develop a customized plan of care for high-risk pregnancies or pregnancies with fetal abnormalities.</p>
<p>Fetal medicine also plays an important role in supporting expectant parents through the emotional and psychological challenges that may arise during pregnancy. Fetal medicine doctors can provide counseling and support to help parents understand their options and make informed decisions about their pregnancy and their baby's care.

Overall, fetal medicine is an essential field of medicine that focuses on the health and well-being of unborn babies and their mothers. It combines advanced medical technology and compassionate care to provide the best possible outcomes for both mother and baby.</p>
                        
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
export default Fetalcon;