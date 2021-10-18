import React from 'react'
import './Banner.css'
import bann from '../../../image/homepage.jpg'



const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="taxt col-md-6">
                        <h1>our commitment is to give a quality service  in the whole country.we are commit to take all kind of people problems</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={bann} alt="" />
                    </div>
                </div>
            </div>
        </div>
       
        
    )
}

export default Banner
