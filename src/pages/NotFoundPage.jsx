import React from 'react'
import { Link, useNavigate } from 'react-router'
import CarbonImage from '../assets/carbon (1).png'

const NotFoundPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      Page Not Found
      <p>Please Naviagte to 
        {/* <Link to='/'>
        </Link> */}
            <img onClick={()=>navigate("/")} src={CarbonImage} />
      </p>
    </div>
  )
}

export default NotFoundPage
