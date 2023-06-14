import { useState } from "react";
import LazyLoad from "react-lazy-load";

function ScrollTop(){
    const [show, setShow]=useState("none")
    function callme(){
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    function scrollchecking(){
        if(window.scrollY>200){
            setShow("flex");
        }else{
            setShow("none");
        }
    }
    let come={
        display:`${show}`
    }
    window.addEventListener('scroll',scrollchecking)
    return (<>
    <div style={come} className="scrolltop" onClick={callme}>
        <div>
            <LazyLoad>
            <img src="photo/right-arrow (1).png" alt="" />
            </LazyLoad>
        </div>
    </div>
    </>)
}
export default ScrollTop;