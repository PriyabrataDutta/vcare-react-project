import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Obstetricsbanner(){
    return (<>
    <LazyLoad>
        <div className="banner obstetricsbanner" >
            <div>
                <h4>Obstetrics</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Obstetrics</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>) 
}
export default Obstetricsbanner;