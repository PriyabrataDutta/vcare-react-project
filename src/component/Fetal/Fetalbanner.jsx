import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Fetalbanner(){
    return (<>
    <LazyLoad>
        <div className="banner fetalbanner" >
            <div>
                <h4>Fetal Medicine</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Fetal Medicine</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>) 
}
export default Fetalbanner;