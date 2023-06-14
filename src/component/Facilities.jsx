import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

function Facilities(){
    return (<>
    <div className="section">
        <div className="container">
            <div className="title title-fac">
                <h4>Facilities</h4>
            </div>
            <div className="rowfacility">
                <div>
                    <LazyLoad className="lazy">
                    <img className="facilityimg" src="photo/imgone.jpg" alt="" />
                    </LazyLoad>
                    <h6>Ultrasound Scan with Color Doppler</h6>
                    <p>An ultrasound scan with color Doppler is a medical imaging technique that uses high-frequency sound waves to produce images of the inside of the body. The color Doppler component adds color to the images to show blood flow in real-time.</p>
                    <div>
                        <Link className="readmore" to="/ultrasound">Read More</Link>
                    </div>
                </div>
                <div>
                    <LazyLoad>
                    <img className="facilityimg" src="photo/imgtwo.jpg" alt="" />
                    </LazyLoad>
                    <h6>2D Echo</h6>
                    <p>A 2D echo, or two-dimensional echocardiogram, is a non-invasive medical test that uses high-frequency sound waves to produce detailed images of the heart. During the procedure.</p>
                    <div>
                        <Link className="readmore" to="/twodecho">Read More</Link>
                        </div>
                </div>
                <div>
                    <LazyLoad>
                    <img className="facilityimg" src="photo/imgthree.jpg" alt="" />
                    </LazyLoad>
                    <h6>3D & 4D Scan</h6>
                    <p>A 3D and 4D scan is a type of medical imaging that uses ultrasound technology to create three-dimensional images of a developing fetus in the womb. The main difference between a 3D and 4D scan is that a 4D scan captures real-time video images of the fetus.</p>
                    <div>
                        <Link className="readmore" to="/threefour">Read More</Link>
                        </div>
                </div>
                <div>
                    <LazyLoad>
                    <img className="facilityimg" src="photo/imgfour.jpg" alt="" />
                    </LazyLoad>
                    <h6>Digital X-Ray</h6>
                    <p>Digital X-ray is a medical imaging technique that uses electromagnetic radiation to produce detailed images of the inside of the body. Unlike traditional X-rays, which produce images on film, digital X-rays use digital sensors to capture the images.</p>
                    <div>
                        <Link className="readmore" to="/digitalxay">Read More</Link>
                    </div>
                </div>
                <div>
                     <LazyLoad>
                    <img className="facilityimg" src="photo/imgfive.jpg" alt="" />
                    </LazyLoad>
                    <h6>ECG</h6>
                    <p>An electrocardiogram (ECG or EKG) is a medical test that records the electrical activity of the heart. It is a non-invasive and painless test that can be used to evaluate the heart's rhythm and detect abnormalities.</p>
                    <div>
                        <Link className="readmore" to="/ecg">Read More</Link>
                    </div>
                </div>
                <div>
                <LazyLoad>
                    <img className="facilityimg" src="photo/imgsix.jpg" alt="" />
                    </LazyLoad>
                    <h6>Clinical Laboratory</h6>
                    <p>A clinical laboratory, also known as a medical laboratory, is a facility that performs diagnostic tests on patient specimens such as blood, urine, tissue, and other bodily fluids. These tests are used to diagnose and monitor medical conditions, assess treatment efficacy, and detect potential health problems.</p>
                    <div>
                        <Link  className="readmore" to="/cliniclab">Read More</Link>
                    </div>
                </div>
                <div>
                <LazyLoad>
                    <img className="facilityimg" src="photo/imgseven.jpg" alt="" />
                    </LazyLoad>
                    <h6>Endoscopy</h6>
                    <p>Endoscopy is a medical procedure that uses a flexible tube with a light and camera, called an endoscope, to examine the interior of the body. Endoscopy is a non-surgical and minimally invasive procedure that allows doctors to view the inside of the body without making large incisions.</p>
                    <div>
                        <Link className="readmore" to="/endoscopy">Read More</Link>
                        </div>
                </div>
                <div>
                <LazyLoad>
                    <img className="facilityimg" src="photo/imgeight.jpg" alt="" />
                    </LazyLoad>
                    <h6>Colonoscopy</h6>
                    <p>Colonoscopy is a medical procedure that uses a flexible tube with a light and camera, called a colonoscope, to examine the inside of the large intestine (colon) and rectum. The procedure is typically performed under sedation and is used to screen for colon cancer.</p>
                    <div>
                        <Link className="readmore" to="/colonoscopy">Read More</Link>
                        </div>
                </div>
                <div>
                <LazyLoad>
                    <img className="facilityimg" src="photo/imgnine.jpg" alt="" />
                    </LazyLoad>
                    <h6>Consultant</h6>
                    <p>A consultant is a senior professional who provides expert advice and guidance in a particular field. In the medical profession, a consultant is a highly experienced and qualified doctor who specializes in a specific area of medicine.</p>
                    <div>
                        <Link className="readmore" to="/consultant">Read More</Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Facilities;