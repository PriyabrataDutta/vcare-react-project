import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Colonoscopybanner(){
    return (<>
    <LazyLoad>
        <div className="banner colonoscopybanner" >
            <div>
                <h4>Colonoscopy</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Colonoscopy</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>) 
}
export default Colonoscopybanner;