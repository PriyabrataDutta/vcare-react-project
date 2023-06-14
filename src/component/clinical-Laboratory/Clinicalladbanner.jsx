import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Clinicallabbanner(){
    return (<>
    <LazyLoad>
        <div className="banner clinicbanner" >
            <div>
                <h4>Clinical Laboratory</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Clinical Laboratory</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Clinicallabbanner;