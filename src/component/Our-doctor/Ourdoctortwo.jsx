import LazyLoad from "react-lazy-load";

function OurdoctorTwo(){
    return (<>
        <div className="section">
            <div className="container">
                <div className="title">
                    <h4> Dr. Veerendra T</h4>
                    <h6>Consultant Radiologist & Sonologist</h6>
                </div>
                <div className="onerow">
                    <div className="docphoto">
                        <LazyLoad>
                        <img  src="photo/demi-doctor.png" alt="" />
                        </LazyLoad>
                    </div>
                    <div className="doctorcon">
                        <p>Dr. T. Veerendra's belief is simple, being a healthcare provider is not only an important responsibility but a true privilege and every patient engagement helps make a real difference in their life as an individual and overall as a community. </p>
                        <p>Dr. T. Veerendra has been practicing Radiologist in Karnataka for considerable amount of time, and is respected by his peers. Whether you're coming for a simple check-up or a more complex treatment regimen at Muthuraya Swamy Extension, Sunkadakatte, Bengaluru, Karnataka 560091</p>
                        <h6>Education</h6>
                        <div>
                            <ul>
                                <li><p> MBBS . DMRD , DNB</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>)
}
export default OurdoctorTwo;