import LazyLoad from "react-lazy-load";

function HospitalInfo(){
    let body=<div className="pack">
    <div className="packone">
        <LazyLoad>
        <img src="photo/imghos.jpg" alt="" />
        </LazyLoad>
    </div>
    <div className="packone packpadd texthospital">
        <div className="width packmar">
            <h3>V Care Scan Centre & Laboratory</h3>
            <h6>We Employ Latest Research Technology</h6>
            <p>At V Care Scan Centre & Laboratory, we promise to deliver our patients the ultimate medical diagnostics services. This includes delivering the highest quality Imaging, laboratory and comprehensive health check services with respect, courtesy and compassion.</p>
            <p>V Care Scan Centre & Laboratory we combine the most sophisticated technology in medicine with personal attention to provide patients with thorough individual care by our experienced and certified doctors, technologists and friendly supportive staff. Over the years In addition to core services , all Specialist consultation is available on appointment .We introduced various Health check packages & home blood collection packages.</p>
        </div>
    </div>
</div>
    return (<>
    <div className="section">
            <div className="container width topmargin">
                {body}
            </div>
    </div>
    </>)
}
export default HospitalInfo;