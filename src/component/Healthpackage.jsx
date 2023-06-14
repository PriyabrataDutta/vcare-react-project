import { useState } from "react";
import LazyLoad from "react-lazy-load";

const Healthpackage=()=>{
    const [health, setHealth]=useState(General);
    const [buttonone, setButtonone]=useState("#0071ef");
    const [buttontwo, setButtontwo]=useState("white");
    const [buttonthree, setButtonthree]=useState("white");
    const [buttonfour, setButtonfour]=useState("white");
    const [buttonfive, setButtonfive]=useState("white");
    const ChangeMaster=()=>{
        setHealth(Master);
        setButtonone("white");
        setButtontwo("white");
        setButtonthree("white");
        setButtonfour("#0071ef");
        setButtonfive("white");
    }
    const ChangeGeneral=()=>{
        setHealth(General);
        setButtonone("#0071ef");
        setButtontwo("white");
        setButtonthree("white");
        setButtonfour("white");
        setButtonfive("white");
    }
    const ChangeFemale=()=>{
        setHealth(Female);
        setButtonone("white");
        setButtontwo("#0071ef");
        setButtonthree("white");
        setButtonfour("white");
        setButtonfive("white");
    }
    const ChangeMale=()=>{
        setHealth(Male);
        setButtonone("white");
        setButtontwo("white");
        setButtonthree("#0071ef");
        setButtonfour("white");
        setButtonfive("white");
    }
    const ChangeDiabetic=()=>{
        setHealth(Diabetic);
        setButtonone("white");
        setButtontwo("white");
        setButtonthree("white");
        setButtonfour("white");
        setButtonfive("#0071ef");
    }
    let one={
        backgroundColor:`${buttonone}`
    }
    let two={
        backgroundColor:`${buttontwo}`
    }
    let three={
        backgroundColor:`${buttonthree}`
    }
    let four={
        backgroundColor:`${buttonfour}`
    }
    let five={
        backgroundColor:`${buttonfive}`
    }
    return (<>
    <div className="section-pack bannerpack">
            <div className="container width topmargin">
                <div className="title">
                    <h4>Health Packages</h4>
                </div>
                <div>
                    <ul className="heailthpach">
                        <li onClick={ChangeGeneral} style={one}><h6>Health Checkup</h6></li>
                        <li onClick={ChangeFemale} style={two}><h6>Female Health</h6></li>
                        <li onClick={ChangeMale} style={three}><h6>Male Health</h6></li>
                        <li onClick={ChangeMaster} style={four}><h6>Master Health</h6></li>
                        <li onClick={ChangeDiabetic} style={five}><h6>Diabetic Health</h6></li>
                    </ul>
                </div>
                {health}
        </div>
    </div>
    </>)
}
export default Healthpackage;

const General=()=>{
    return (<>
    <div className="pack">
                    <div className="packone">
                        <LazyLoad>
                        <img src="photo/pack.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="packone packpadd">
                        <div className="width packmar">
                            <h6>General Health Checkup <span>(Rs.2300)</span></h6>
                        </div>
                        <div className="innerpack">
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Complete Haemogram</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Group & RH type</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Total Cholesterol</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">FBS & PPBS</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Creatinine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Urea</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Urine Complete Analysis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">ECG</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Consultation With Physician</div></li>
                            </ul>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
    </>)
}

const Female=()=>{
    return (<>
    <div className="pack">
                    <div className="packone">
                        <LazyLoad>
                        <img src="photo/pack.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="packone packpadd">
                        <div className="width packmar">
                            <h6>Women Wellness Package <span>(Rs. 4000)</span></h6>
                        </div>
                        <div className="innerpack">
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">CBC & ESR</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Peripheral Blood Smear</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Fasting Blood Sugar</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Urea</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Creatinine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Lipid Profile</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Urine Analysis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">VDRL,HIV 1 & 2 , HbsAG,</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Pap Smear</div></li>
                            </ul>
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">ECG</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Ultrasound Abdomen & Pelvis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Stool Analysis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Thyroid Profile (TFT)</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Consultation with Gynaecologist</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>)
}

const Male=()=>{
    return (<>
    <div className="pack">
                    <div className="packone">
                        <LazyLoad>
                        <img src="photo/pack.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="packone packpadd">
                        <div className="width packmar">
                            <h6>Extended Diabetic profile <span>(Rs. 4600)</span></h6>
                        </div>
                        <div className="innerpack">
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Complete Haemogram</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Fasting & Post Pradnial Blood Sugar</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Lipid Profile</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Urea</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Creatinine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Uric Acid</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Glycosylate Hemoglobin (Hb Alc)</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Insulin</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Electrolytes</div></li>
                            </ul>
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Urine Microalbuminuria (Random)</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">ECG</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Treadmill Test (TMT or ECHO)</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Ultrasound Abdomen & Pelvis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Consultation with Physician</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>)
}

const Master=()=>{
    return (<>
    <div className="pack">
                    <div className="packone">
                        <LazyLoad>
                        <img src="photo/pack.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="packone packpadd">
                        <div className="width packmar">
                            <h6>Master Health Checkup <span>(Rs.3450)</span></h6>
                        </div>
                        <div className="innerpack">
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Complete Haemogram</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Group & Rh type</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Fasting & Post Prandial Blood Sugar</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Lipid Profile</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Liver Function Test</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Urea</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Creatinine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">HIV 1& 2</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Hbs Ag</div></li>
                            </ul>
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">TSH</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Urine Complete Analysis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Stool Analysis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">ECG</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Ultrasound of Abdomen & Pelvis</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Consultation with Physician</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
    </>)
}

const Diabetic=()=>{
    return (<>
    <div className="pack">
                    <div className="packone">
                        <LazyLoad>
                        <img src="photo/pack.jpg" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="packone packpadd">
                        <div className="width packmar">
                            <h6>Diabetic profile <span>(RS. 2500)</span></h6>
                        </div>
                        <div className="innerpack">
                            <ul>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Fasting & Post Pradnial Blood Sugar</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Blood Urea</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Creatinine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Hb Alc</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Serum Uric Acid</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Lipid Profile</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Urine Routine</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">ECG</div></li>
                                <li><span><img src="photo/next (1).png" alt="" /></span><div className="leftme">Consulation with Physician</div></li>
                            </ul>
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
    </>)
}