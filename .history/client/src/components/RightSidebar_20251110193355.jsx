import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt='' 
            className='w-20 aspect-[1/1] rounded-full'
        />
        <p className='w-2 h-2 rounded-full bg-green-500'>{selectedUser.fullName}</p>
        <p className='px-10 mx-auto'>{selectedUser.bio}</p>
        <h1></h1>
      </div>
    </div>
  )
}

export default RightSidebar