import LazyLoad from "react-lazy-load";

function Doctor(){
    return (<>
    <div className="section">
        <div className="container">
            <div className="title">
                <h4>Dr. Pratibha</h4>
                <h6>Obstetrician & Gynecologist</h6>
            </div>
            <div className="onerow">
                <div className="docphoto">
                    <LazyLoad>
                    <img  src="photo/prathibha-dr.png" alt="" />
                    </LazyLoad>
                </div>
                <div className="doctorcon">
                    <p>Dr. Prathibha is a renowned and experienced Obstetrics & Gynecology in Bangalore. She brings with her an experience of 10+ years and has been associated with some of the best hospitals in Bangalore. A dedicated compassionate doctor who handles many challenging cases with the latest cutting edge technology. She offers patient-friendly scientific advice to your problems while maintaining the highest professional and ethical values.</p>
                    <h6>Dr. Prathibha's clinic offers these services</h6>
                    <div>
                        <ul>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>Normal delivery</p></li>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>High risk pregnancy</p></li>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>Gynae surgeries</p></li>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>Fibroid treatment</p></li>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>Laparoscopy Doctor provides In-Clinic</p></li>
                            <li><img  className="whiter-img-arrow" src="photo/right-arrow-angle-black-circular-interface-symbol.png" alt="" /><p>Online (Audio/ Video) Consultation</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Doctor;