import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
function Consultantcon(){
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
                            <h6>Consultant</h6>
                            <p>A consultant is a senior professional who provides expert advice and guidance in a particular field. In the medical profession, a consultant is a highly experienced and qualified doctor who specializes in a specific area of medicine.

Consultants are typically appointed to senior positions within hospitals and healthcare organizations. They are responsible for leading teams of medical professionals, providing clinical expertise and guidance, and managing patient care. They may also be involved in research and teaching, helping to advance the field of medicine and train the next generation of doctors.</p>
                            <p>Consultants are highly respected for their expertise and experience, and they play a critical role in the delivery of high-quality healthcare. They are often called upon to provide second opinions and to help manage complex medical cases. They may also work closely with other healthcare professionals, such as nurses, therapists, and support staff, to ensure that patients receive the best possible care.

In addition to providing clinical care, consultants may also be involved in management and administrative tasks, such as developing policies and procedures, managing budgets, and overseeing the delivery of healthcare services. They are also responsible for maintaining their own professional development and staying up-to-date with the latest advances in their field.

Overall, consultants are highly skilled and experienced professionals who play a critical role in the delivery of high-quality healthcare. Their expertise, leadership, and guidance are essential for ensuring that patients receive the best possible care and that the medical profession continues to advance and improve.</p>
                        
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
export default Consultantcon;