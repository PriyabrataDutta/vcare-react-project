import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Gynaecologybanner(){
    return (<>
    <LazyLoad>
        <div className="banner gynaecologybanner" >
            <div>
                <h4>Gynaecology</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Gynaecology</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Gynaecologybanner;