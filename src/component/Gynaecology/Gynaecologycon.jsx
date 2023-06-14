import LazyLoad from "react-lazy-load";
import Linkbox from "../Linkbox";
import Womencarelink from "../Womencarelink";
function Gynocologycon(){
    return (<>
        <div className="section">
            <div className="container width">
                <div className="maincontent">
                    <div className="confirst">
                        <div>
                        <div>
                            <LazyLoad>
                        <img src="photo/wotwo.jpg" alt=""/>
                        </LazyLoad>
                        </div>
                        <div className="facilityinfo">
                            <h6>Gynaecology</h6>
                            <p>Gynaecology is the branch of medicine that focuses on the health of the female reproductive system. Gynaecologists are medical doctors who specialize in the diagnosis, treatment, and management of a wide range of conditions that affect the female reproductive organs, including the uterus, ovaries, fallopian tubes, cervix, and vagina.

Gynaecology covers a broad range of medical services, including preventive care, diagnostic tests, and treatment for various conditions. This may include regular gynecological exams, Pap tests, ultrasound scans, and treatment for conditions such as endometriosis, polycystic ovary syndrome (PCOS), and pelvic inflammatory disease (PID).</p>
                            <p>Gynaecologists also provide care and treatment for women with fertility issues, including assisted reproductive technologies such as in vitro fertilization (IVF). They may also perform surgical procedures such as hysterectomy, myomectomy (removal of uterine fibroids), and oophorectomy (removal of the ovaries).

In addition to providing medical care, gynaecologists also play an important role in educating women about their reproductive health and family planning options. They may also provide counseling for issues such as sexual dysfunction, menopause, and contraception.</p>
<p>Overall, gynaecology is an essential field of medicine that focuses on the health and well-being of women throughout their lives, from adolescence to menopause and beyond.</p>
                        
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
export default Gynocologycon;