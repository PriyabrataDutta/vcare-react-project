import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Endoscopybanner(){
    return (<>
    <LazyLoad>
        <div className="banner endoscopybanner" >
            <div>
                <h4>Endoscopy</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Endoscopy</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>) 
}
export default Endoscopybanner;