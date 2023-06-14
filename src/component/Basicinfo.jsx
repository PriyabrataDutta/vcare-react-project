import LazyLoad from "react-lazy-load";

function BasicInfo(){
    return (<>
    <div className="section">
        <div className="container width">
            <div className="maindisplay">
                <div className="infocontain">
                    <div>
                        <LazyLoad>
                        <img src="photo/medical-team.png" alt="" />
                        </LazyLoad>
                    </div>
                    <h6>Experienced Staff</h6>
                    <p>Professional caregivers provide the service and comfort that surpasses the commitment and reassuirance of family care. Our doctors and staffs are at the forefront of the medical and diagnostic practice, giving you the trust and confidence to consider us.</p>
                </div>
                <div className="infocontain">
                    <div>
                        <LazyLoad>
                        <img src="photo/spinning.png" alt="" />
                        </LazyLoad>
                    </div>
                    <h6>Advanced Equipment</h6>
                    <p>State of the art medical diagnostic equipement and technology for testing the entire human body is our standard. All testing facilities under one roof enable us to deliver comprehensive solutions and deliver for your convenience.</p>
                </div>
                <div className="infocontain">
                    <div>
                        <LazyLoad>
                        <img src="photo/diagnosis.png" alt="" />
                        </LazyLoad>
                    </div>
                    <h6>Accurate Diagnosis</h6>
                    <p>Our credo of providing accurate diagnosis empowers our doctors and staff to drive our in-house equipment and technology through meticulous and rigorous testing practices. This enables you with results that are authentic for the next stage of your treatment.</p>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default BasicInfo;