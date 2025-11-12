import React from 'react'
import assets from '../assets/assets'

const RightSidebar = ({selectedUser}) => {
  return selectedUser && (
    <div>
      <div>
        <img src={selectedUser?.p} alt=''/>
      </div>
    </div>
  )
}

export default RightSidebar