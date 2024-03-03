import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({conversation, lastIdx, emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext()
  console.log(onlineUsers)
  const isOnline = onlineUsers.includes(conversation?._id)
  const isSelected = selectedConversation?._id === conversation._id

  return (
    <>
      <div className={`flex gap-2 item-center hover:bg-zinc-900 rounded p-2 py-1 cursor cursor-pointer
    ${isSelected? 'bg-zinc-900 ' : ''}`}
    onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
                <img src={conversation?.profilePic}
					alt='user avatar'/> 
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200 capitalize'>{conversation?.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
      </div>
      {
        !lastIdx && <div className='divider my-0 py-0 h-1'></div>
      }
    </>
  )
}

export default Conversation
