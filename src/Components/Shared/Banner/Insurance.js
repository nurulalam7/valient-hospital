import React from 'react'
import insu1 from '../../../image/insorance1.jpg'
import insu2 from '../../../image/insurance2.jpg'
import insu3 from '../../../image/insurance3.jpg'
import insu4 from '../../../image/insurance4.jpg'
import './Insurance.css'


const Insurance = () => {
    return (
        <div className="insuran">
            <h3>INSURANCE</h3>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"><img src={insu1} alt="" /></div>
                        <div className="col-md-3"><img src={insu2} alt="" /></div>
                        <div className="col-md-3"><img src={insu3} alt="" /></div>
                        <div className="col-md-3"><img src={insu4} alt="" /></div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insurance
