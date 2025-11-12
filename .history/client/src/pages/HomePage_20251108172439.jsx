import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'

const HomePage = () => {
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[15%]'>
    <div>
    <Sidebar/>
    <ChatContainer/>
    

    </div>
    </div>
  )
}

export default HomePage