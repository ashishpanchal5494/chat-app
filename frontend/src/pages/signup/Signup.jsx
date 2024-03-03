import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
	const [input, setInput] = useState({
		fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
	})

	const {loading, signup} = useSignup()

	const handleCheckboxChange = (gender) => {
		setInput({...input, gender})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
        await signup(input)
	}
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto h-screen'>
			<div className=' p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-zinc-950'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text text-gray-700'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10'
							value={input.fullName}
							onChange={(e) => setInput({...input, fullName: e.target.value})}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-gray-700'>Username</span>
						</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10'
							value={input.username}
							onChange={(e) => setInput({...input, username: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-700'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={input.password}
							onChange={(e) => setInput({...input, password: e.target.value})}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text text-gray-700'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={input.confirmPassword}
							onChange={(e) => setInput({...input, confirmPassword: e.target.value})}
						/>
					</div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedToGender={input.gender}/>
					<Link
						
						className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
						to="/login"					>
						Already have an account?
					</Link>

					<div>
						<button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700'>
							{loading ? <span className='loading loading-spinner'></span> : 'Sign Up' }
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}

export default Signup
