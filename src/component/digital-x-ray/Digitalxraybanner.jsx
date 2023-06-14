import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function DigitalXraybanner(){
    return (<>
    <LazyLoad>
        <div className="banner digitaldbanner" >
            <div>
                <h4>Digital X-Ray</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Digital X-Ray</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default DigitalXraybanner;