import React from 'react'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.profilePic} alt=''/>
      </div>
    </div>
  )
}

export default RightSidebar