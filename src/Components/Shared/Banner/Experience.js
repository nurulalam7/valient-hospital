import React from 'react'
import eximage1  from '../../../image/exoerience3.jpg';
import eximage2 from '../../../image/experience1.jpg';
import eximage3 from '../../../image/experience2.jpg'
import './Experience.css'


const Experience = () => {
    return (
        <div className="extext">
            <h2>THE VALIENT EXPERIENCE</h2>
            <h6>this is very affordable hospital.any kinds of desise we will take high action according to syndom .so we are all commit  to all for providing a  good qualityfull treatment.we have very experince and best doctor who was taken different kinds of degree from recognist medical college in bangladesh and from out side of this country</h6>

            <button className="buttt">learn more</button>
            <br />
           <div className="banner">
               <div className="container">
                   <div className="row">
                      <div className="col-md-4"><img src={eximage1} alt="" /></div>
                      <div className="col-md-4"><img src={eximage2} alt="" /></div>
                      <div className="col-md-4"><img src={eximage3} alt="" /></div>
                   </div>
                   
               </div>
           </div>
        </div>
    )
}

export default Experience
