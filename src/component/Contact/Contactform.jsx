function ContactForm(){
    let body=<div className="pack">
    <div className="packone packpadd texthospital">
        <div className="width packmar">
            <h3>V Care Scan Centre & Laboratory</h3>
            <h6>We Employ Latest Research Technology</h6>
            <p>At V Care Scan Centre & Laboratory, we promise to deliver our patients the ultimate medical diagnostics services. This includes delivering the highest quality Imaging, laboratory and comprehensive health check services with respect, courtesy and compassion.</p>
            
            <li><h6 to="" className="font"><span className="faciimg"><img src="photo/time.png" alt="" /></span><div>Closing Time</div></h6></li>
            <p>9 PM</p>
            <li><h6 href="tel:" className="font"><span className="faciimg"><img src="photo/phone-call.png" alt="" /></span><div>Phone</div></h6></li>
            <p>90351 22020</p>
            <li><h6 to="" className="font"><span className="faciimg"><img src="photo/email-1.png" alt="" /></span><div>vcarescan@gmail.com</div></h6></li>
            <p>vcarescan@gmail.com</p>
            <li><h6 to="" className="font"><span className="faciimg"><img src="photo/placeholder.png" alt="" /></span><div> Location</div></h6></li>
            <p>Shop No. 1, Jai Maruthi Convention Hall Building, Magadi Main Rd, near Bank Of Baroda (E Vijaya), Muthuraya Swamy Extension, Sunkadakatte, Bengaluru, Karnataka 560091</p>
        </div>
    </div>
    <div className="packone colorform">
        <div>
            <h6>Contact Us</h6>
        </div>
        <form className="form">
            <label className="label">Enter The Name</label><br></br>
            <input className="input" placeholder="    Name"></input>
            <label className="label">Enter The Phone Number</label><br></br>
            <input className="input" placeholder="    Phone"></input>
            <label className="label">Enter The Email</label><br></br>
            <input className="input" placeholder="    Email"></input>
            <label className="label">Enter The Message</label><br></br>
            <textarea className="texarea"></textarea>
            <div className="submit">
                <button>Submit</button>
            </div>
        </form>
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
export default ContactForm;