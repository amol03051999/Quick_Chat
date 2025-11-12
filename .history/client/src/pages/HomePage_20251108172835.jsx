import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

    const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[15%]'>
    <div className=}>
    <Sidebar/>
    <ChatContainer/>
    <RightSidebar/>

    </div>
    </div>
  )
}

export default HomePage