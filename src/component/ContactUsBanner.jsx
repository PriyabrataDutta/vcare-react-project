import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Contactbanner(){
    return (<>
    <LazyLoad>
    <div className="banner contactbanner" >
        <div>
            <h4>Contact Us</h4>
            <div>
                <Link to="/">Home</Link>/
                <Link to="">Contact Us</Link>
            </div>
        </div>
    </div>
    </LazyLoad>
    </>)
}
export default Contactbanner;