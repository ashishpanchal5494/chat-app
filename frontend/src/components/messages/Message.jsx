import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extrectTime';

const Message = ({message}) => {

  
  const { authUser } = useAuthContext();

	const { selectedConversation } = useConversation();
  
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message?.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-slate-950 text-white   " : " bg-white text-black";
  const shakeClass = message.shouldShake ?  "shake" : "";

  return (
    <div className={`chat relative ${chatClassName}`}>
    <div className='chat-image avatar'>
      <div className='w-10 rounded-full'>
        <img alt='Tailwind CSS chat bubble component' src={profilePic} />
      </div>
    </div>
    <div className={` rounded-2xl p-2 pb-3 shadow-2xl shadow-black ${bubbleBgColor} ${shakeClass} pb-2 capitalize`}>{message.message}
    </div>
    <div className='chat-footer text-zinc-400 text-xs/[2px] flex gap-1 p-2 items-center'>{formattedTime}</div>
  </div>
  )
}

export default Message

