import React from 'react'
import Banner from './Banner'
import Experience from './Experience'
import Insurance from './Insurance'
import Serve from './Serve'

import Specialties from './Specialties'
import Testimonial from './Testimonial'

const Bannermain = () => {
    return (
        <div>
            <Banner></Banner>
            <Experience></Experience>
            <Serve></Serve>
            <Specialties></Specialties>
            <br />
            <br />
            <Testimonial></Testimonial>
            <Insurance></Insurance>
        </div>
    )
}

export default Bannermain
