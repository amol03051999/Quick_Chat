import React from 'react'
import assets from '../assets/assets'

const Sidebar = ({selectedUser,setSelectedUser}) => {
  return (
    <div>
    <div className='pb-5'>
     <div className='flex justify-between items-center'>
    <img src={assets.logo} alt='logo' className='mx-w-40'/>
    <div className='relative py02 '>

    </div>
     </div>
    </div>

    </div>
  )
}

export default Sidebar