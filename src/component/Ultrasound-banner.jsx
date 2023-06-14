import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Ultrasoundbanner(){
    return (<>
    <LazyLoad>
        <div className="banner Ultasoundbanner" >
            <div>
                <h4>Ultrasound Scan with Color Doppler</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Ultrasound Scan with Color Doppler</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Ultrasoundbanner;