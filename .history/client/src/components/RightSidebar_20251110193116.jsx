import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt='' 
            className='w-20 aspect-[1/1] rounded-full'
        />
        <h1 className='w-2 h-2 rounded-full bg-green'>{selectedUser.fullName}</h1>
      </div>
    </div>
  )
}

export default RightSidebar