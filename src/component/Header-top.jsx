import React, { useState } from 'react';
function HeaderTop(){
    return (<>
    <div className="headertop">
        <div>
            <div className="header-top-div">
                <a href="">V Care Scan Centre & Laboratory</a>
            </div>
        </div>
        <div className="header-icon">
            <ul>
                <li><a href=""><img className="img" src="photo/telephone.png" alt="" />090351 22020</a></li>
                <li><a href=""><img className="img" src="photo/mail.png" alt="" />vcarescan@gmail.com</a></li>
                <li><a href=""><img className="img" src="photo/facebook-logo.png" alt="" /></a></li>
                <li><a href=""><img className="img" src="photo/twitter.png" alt="" /></a></li>
            </ul>
        </div>
    </div>
    </>)
}
export default HeaderTop;