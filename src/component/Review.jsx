import { useState,useEffect } from "react";
import LazyLoad from "react-lazy-load";

function Review(){
    const [index, setIndex] = useState(0);
    const [truea, setTruea]=useState(true);
    useEffect(()=>{
        let slidermover=setInterval(()=>{
            if(truea)
            {
                if(window.innerWidth>992){
                    if(index<1){
                        setIndex(index+1);
                    }else{
                        setIndex(0)
                    }
                }
                if(window.innerWidth>768 && window.innerWidth<992) {
                    if(index<2){
                        setIndex(index+1);
                    }else{
                        setIndex(0)
                    }
                }
                if(window.innerWidth<768){
                    if(index<3){
                        setIndex(index+1);
                    }else{
                        setIndex(0)
                    }
                }
            }else{
                clearInterval(slidermover);
            }
        },2000)
        return ()=>{
            clearInterval(slidermover);
        }
    },[index]);
    const transfer={
        transform:`translateX(-${index*25}%)`
    }
    function stopSlider(){
        setTruea(!truea);
    }
    return (<>
    <LazyLoad>
        <div className="section reviewbox">
            <div className="width containhidder">
            <div className="title tomargintitle">
                    <h4>What Our Patients Say About Us</h4>
                </div>
                <div className="overhide">
                    <div className="topreview"  style={transfer} onClick={stopSlider}>
                        <div className="subreview">
                            <div>
                            <LazyLoad>
                                <img className="imgmarre" src="photo/user.png" alt="" />
                               </LazyLoad>
                                <ul>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                </ul>
                            </div>
                            <h6>Kavya Patil</h6>
                            <p>One of the best caring unit in Bengaluru. They are equipped with the best technology and well-known medical practitioners. Before treatment I heard lots of positive news about them.</p>
                        </div>
                        <div className="subreview">
                            <div>
                                <LazyLoad>
                                <img className="imgmarre" src="photo/user.png" alt="" />
                                </LazyLoad>
                                <ul>
                                    
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                               
                                </ul>
                            </div>
                            <h6>Raj Sena</h6>
                            <p>Awesome Hospitality, clean hygienic environment, very cooperative and good behavior, staffs are so friendly with patients.</p>
                        </div>
                        <div className="subreview">
                            <div>
                                <LazyLoad>
                                <img className="imgmarre" src="photo/user.png" alt="" />
                                </LazyLoad>
                                <ul>
                                 
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                            
                                </ul>
                            </div>
                            <h6>Rubica Noi</h6>
                            <p>Very nice and good Clinic for all types of diagnostic tests, pathology tests, x-ray, CT Scan, USG, EEG, ECG and consulting to Doctors of Neurology, Orthopaedic, Medicine and others.</p>
                        </div>
                        <div className="subreview">
                            <div>
                                <LazyLoad>
                                <img className="imgmarre" src="photo/user.png" alt="" />
                                </LazyLoad>
                                <ul>
                               
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                                    <li><img src="photo/favourite.png" alt="" /></li>
                             
                                </ul>
                            </div>
                            <h6>Kavya Patil</h6>
                            <p>One of the best caring unit in Bengaluru. They are equipped with the best technology and well-known medical practitioners. Before treatment I heard lots of positive news about them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </LazyLoad>
        </>)
}
export default Review;