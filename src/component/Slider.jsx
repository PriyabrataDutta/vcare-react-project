import { useState,useEffect } from "react";

function Slider(){
    const [index, setIndex] = useState(0);

    
    useEffect(()=>{
    const slidermover=setInterval(()=>{
        if(index<2){
            setIndex(index+1);
        }else{
            setIndex(0)
        }
    },2000)
    return ()=>{
        clearInterval(slidermover);
    }
   });

   const transfer={
    transform:`translateX(-${index*33.3333}%)`
   }
    return (<>
    <div>
        <div className="slide-hidder">
            <div className="slider-body" style={transfer}>
                <div className="slider">
                    <img className="onebannermain" src="photo/1924x705-1.png" alt="" />
                    <img className="twobannermain" src="photo/1080x720-1.png" alt="" />
                </div>
                <div className="slider">
                    <img className="onebannermain" src="photo/1924x705.png" alt="" />
                    <img className="twobannermain" src="photo/menu-2.png" alt="" />
                </div>
                <div className="slider">
                    <img className="onebannermain" src="photo/1924x705-2.png" alt="" />
                    <img className="twobannermain" src="photo/menu-3.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Slider;
