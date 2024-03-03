import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';


const MessagesContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()

  useEffect(() => {
    return () => {
      setSelectedConversation(null)
    }
  }, [setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        {
            !selectedConversation ? (
            <NoChatSelected/>
            )
            : (
      <>
      {/* <Header/> */}
      <div className='bg-transparent  pl-6 flex flex-row gap-4 '>
      <div className='w-10 rounded-full items-center pt-2'>
        <img alt='Tailwind CSS chat bubble component' src={selectedConversation?.profilePic} />
      </div>

        <span className='text-gray-900 font-bold pt-3 capitalize'>{selectedConversation?.fullName}</span>
      </div>
      
      <Messages/>
      <MessageInput/>
      </>
            )
        }
    </div>
  )
}

export default MessagesContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome {authUser.fullName} 👋 ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};