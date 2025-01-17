import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)
        if (response.status === 200) {
            const data = response.data
            setCaptain(data.captain)
            // console.log(captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }
        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>

                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com' />

                    <h3 className='text-lg font-medium'>Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-7 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='password' />
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 border rounded w-full text-lg'
                    >Login</button>
                    <p className='text-center'>Join a fleet? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain</Link></p>
                </form>
            </div>
            <div>
                <Link
                    to={'/login'}
                    className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 px-4 py-2 border rounded w-full text-lg'
                >Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin