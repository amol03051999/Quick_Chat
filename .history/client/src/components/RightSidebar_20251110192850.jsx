import React from 'react'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?} alt=''/>
      </div>
    </div>
  )
}

export default RightSidebar