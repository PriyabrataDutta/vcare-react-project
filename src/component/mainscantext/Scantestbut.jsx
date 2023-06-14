import { useState } from "react"
import { Link } from "react-router-dom";

function Scantestbut(props){
    const [contro, setControl]=useState("none");
    const [truea, setTruea]=useState(true);
    function changer(){
        props.setScan("block");
    }
    function buttoncotrol(){
        if(truea===true){
            setControl("block");
            setTruea(!truea);
        }else{
            setControl("none");   
            setTruea(!truea);        
        }
    }
    const change={
        display:`${props.foot}`,
    }
    const noner={
        display:`${contro}`,
    }
    const chan={
        display:`${props.scanButton}`,
    }
    return (<>
    <div className="scanbut">
        <div className="scanbutton" style={chan}>
            <button onClick={changer}>Scannings & Test</button>
        </div>
        <div className="scanbuttop" style={change}>
            <p>Please, call our customer service or get an appointment with our doctor.</p>
            <div className="scanbutsec">
                <div className="bookaapp">
                    <button><Link to="/contact">Book Appointment</Link></button>
                </div>
                <div className="cancelscan-1">
                    <img  onClick={buttoncotrol} src="photo/chat.png" alt="" />
                    <a style={noner} href=""><img className="whats" src="photo/whatsapp.png" alt="" /></a>
                    <a style={noner} href=""><img className="call" src="photo/telephone.png" alt="" /></a>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Scantestbut;