import React from 'react'
import './Programs.css'
import prog1 from '../../Assets/space.png'
import prog2 from '../../Assets/damsel.png'
import prog3 from '../../Assets/this.png'
import { useNavigate } from 'react-router-dom'
const Programs = () => {
    const navigate = useNavigate()

    return (
        <div className='programs'>

            <div className='program'>
                <img src={prog1} alt='' />
                <div className="caption">
                    <button className='btn' onClick={() => navigate(`Book`)}>Book Now</button>
                </div>

            </div>

            <div className='program'>
                <img src={prog2} alt='' />
                <div className="caption">
                <button className='btn' onClick={() => navigate(`Book`)}>Book Now</button>
                </div>
            </div>

            <div className='program'>
                <img src={prog3} alt='' />
                <div className="caption">
                <button className='btn' onClick={() => navigate(`Book`)}>Book Now</button>
                </div>
            </div>

        </div>
    )
}

export default Programs
