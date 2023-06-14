import LazyLoad from "react-lazy-load";
import ScaningTest from "../ScaningTest";

function Mainscan(props){
    let styly={
        display:`${props.scan}`,
    }
    function changer(){
        props.setScan("none")
    }
    return (<>
    <div style={styly} className="mainscan">
        <ScaningTest/>
        <div className="cancelscan">
            <LazyLoad>
            <img onClick={changer} src="photo/cancel.png" alt="" />
            </LazyLoad>
        </div>
    </div>
    </>)
}
export default Mainscan;