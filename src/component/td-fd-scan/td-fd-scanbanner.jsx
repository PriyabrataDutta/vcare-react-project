import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Threefourbanner(){
    return (<>
    <LazyLoad>
        <div className="banner threefourdbanner" >
            <div>
                <h4>3D & 4D Scan</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">3D & 4D Scan</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Threefourbanner;