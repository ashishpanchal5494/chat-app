import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (<BiLogOut onClick={  logout} className='h-6 w-6 cursor-pointer hover:text-red-500'/>) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default Logout
