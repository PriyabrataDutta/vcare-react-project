import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function TwodEchobanner(){
    return (<>
    <LazyLoad>
        <div className="banner twodbanner" >
            <div>
                <h4>2D Echo</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">2D Echo</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default TwodEchobanner;