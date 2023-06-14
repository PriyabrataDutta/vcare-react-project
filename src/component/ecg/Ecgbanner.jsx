import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Ecgbanner() {
    return (<>
    <LazyLoad>
        <div className="banner ecgbanner" >
            <div>
                <h4>ECG</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">ECG</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Ecgbanner;