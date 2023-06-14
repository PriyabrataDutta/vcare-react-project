import { Link } from "react-router-dom";
function Womencarelink(){
    return (<>
        <ul className="facilist">
                                        <li><Link to="/obstetrics" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Obstetrics</div></Link></li>
                                        <li><Link to="/gynaecology" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Gynaecology</div></Link></li>
                                        <li><Link to="/fetal" className="font"><span className="faciimg"><img src="photo/right.png" alt="" /></span><div>Fetal Medicine</div></Link></li>
                                   </ul>
        </>)
}
export default Womencarelink;