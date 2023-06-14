import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Consultantbanner(){
    return (<>
    <LazyLoad>
        <div className="banner consultantdbanner" >
            <div>
                <h4>Consultant</h4>
                <div>
                    <Link to="/">Home</Link>/
                    <Link to="">Consultant</Link>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Consultantbanner