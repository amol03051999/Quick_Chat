import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt='' c/>
      </div>
    </div>
  )
}

export default RightSidebar