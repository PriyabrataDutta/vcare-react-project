import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
function Gallerybanner(){
    return (
        <>
        <LazyLoad><div className="banner gallrybanner" >
        <div>
            <h4>Gallery</h4>
            <div>
                <Link to="/">Home</Link>/
                <Link to="">Gallery</Link>
            </div>
        </div>
    </div>
    </LazyLoad>
    </>
    )
}
export default Gallerybanner;