import React, { useEffect } from 'react'
import { getUserBookings } from '../../api/api'

const UserProfile = () => {

    //*********** GET ALL BOOKING OF USER ***********/
    useEffect(()=>{
        getUserBookings
    },[])
  return (
    <div>
      
    </div>
  )
}

export default UserProfile
