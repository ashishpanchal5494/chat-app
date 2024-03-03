import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] = useState()
	const {setSelectedConversation} = useConversation()
	const {conversations} = useGetConversation()

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!search) return;
		if(search.length < 3) {
			return toast.error("Search string must be less than 3 characters");
		}
		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

		if(conversation) {
			setSelectedConversation(conversation)
			setSearch('')
		} else {
			toast.error("Conversation not found")
		}
	}
  return (
    <form onSubmit={handleSubmit} className='flex pt-2 items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-zinc-900 text-white'>
            <IoSearchOutline className="w-6 h-6 outline-none" />
			</button>
		</form>
  )
}

export default SearchInput
