import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    // to fetch the user, we will be using  
    const {user} = useContext(UserContext)

    if(!user) {
        return <div>
            Please Login
        </div>
    }

    return <div>Welcome {user.username}</div>

  return (
    <div>
        
    </div>
  )
}

export default Profile