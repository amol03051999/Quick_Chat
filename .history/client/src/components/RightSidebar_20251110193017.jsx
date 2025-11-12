import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt='' 
            className=''
        />
      </div>
    </div>
  )
}

export default RightSidebar