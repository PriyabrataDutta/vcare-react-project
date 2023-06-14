import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Heailhpackagebanner(){
    return (<>
    <LazyLoad>
    <div className="banner healhbanner" >
        <div>
            <h4>Health Packages</h4>
            <div>
                <Link to="/">Home</Link>/
                <Link to="">Health Packages</Link>
            </div>
        </div>
    </div>
    </LazyLoad>
    </>)
}
export default Heailhpackagebanner;