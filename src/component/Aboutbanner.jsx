import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function AboutBanner(){
    let banner={
        
    }
    return (<>
    <LazyLoad>
    <div className="banner aboutbanner" >
        <div>
            <h4>About Us</h4>
            <div>
                <Link to="/">Home</Link>/
                <Link to="">About Us</Link>
            </div>
        </div>
    </div>
    </LazyLoad>
    </>)
}
export default AboutBanner;