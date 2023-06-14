import { Link } from "react-router-dom";
function Linkbox(){
    return (<>
    <ul className="facilist">
                                    <li><Link to="/ultrasound" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Ultrasound Scan</div></Link></li>
                                    <li><Link to="/twodecho" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>2D Echo</div></Link></li>
                                    <li><Link to="/threefour" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>3D & 4D Scan</div></Link></li>
                                    <li><Link to="/digitalxay" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Digital X-Ray</div></Link></li>
                                    <li><Link to="/ecg" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>ECG</div></Link></li>
                                    <li><Link to="/cliniclab" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Clinical Laboratory</div></Link></li>
                                    <li><Link to="/endoscopy" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Endoscopy</div></Link></li>
                                    <li><Link to="/colonoscopy" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Colonoscopy</div></Link></li>
                                    <li><Link to="/consultant" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Consultant</div></Link></li>
                               </ul>
    </>)
}
export default Linkbox;