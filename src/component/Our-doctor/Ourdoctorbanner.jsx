import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Ourdoctorbanner(){
    return (<>
    <LazyLoad>
        <div className="banner ourdoctorbanner" >
            <div>
                <h4>Our Doctors</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Our Doctors</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Ourdoctorbanner;