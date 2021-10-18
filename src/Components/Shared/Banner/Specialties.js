import React from 'react'
import specilist1 from '../../../image/speciaties1.jpg';
import specilist2 from '../../../image/specialities4.jfif';
import specilist3 from '../../../image/specialities3.jfif';
import specilist4 from '../../../image/specialities2.jpg'
import './Specialties.css'

const Specialties = () => {
    return (
        <div className="specialti">
            <h3>SPECIALITIES OF OUS</h3>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><img src={specilist1} alt="" /></div>
                        <div className="col-md-3"><img src={specilist2} alt="" /></div>
                        <div className="col-md-3"><img src={specilist3} alt="" /></div>
                        <div className="col-md-3"><img src={specilist4} alt="" /></div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialties
