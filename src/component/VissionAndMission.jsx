import LazyLoad from "react-lazy-load";

function VissionAndMission(){
    return (
        <>
        <div className="section">
            <div className="container width">
                <div className="vissionmission">
                    <div className="vission">
                        <div>
                            <LazyLoad>
                            <img src="photo/vision.png" alt="" />
                            </LazyLoad>
                        </div>
                        <h6>MISSION</h6>
                        <p>To provide world-class diagnosis, healthcare and treatment of patients at an affordable price. With a commitment towards honesty, integrity and dignity, VCAre Scan Services demonstrates social responsibility towards patient care. We also focus on strengthening our relationships with universities, colleges, other hospitals, agencies and our community.</p>
                    </div>
                    <div className="mission">
                        <div>
                            <LazyLoad>
                            <img src="photo/target.png" alt="" />
                            </LazyLoad>
                        </div>
                        <h6>VISION</h6>
                        <p>With a devotion to bring a revolution in the health sector, V Care Scan Healthcare Services offers multi-specialty treatment and all types of healthcare services under one roof in entire Odisha. In addition, we increase awareness and educate the general public about holistic healthcare and its importance for leading a healthy life.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default VissionAndMission;