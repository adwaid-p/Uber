import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'

const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const {user, setUser} = useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

        if(response.status === 201){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>

                    <h3 className='text-lg font-medium mb-2'>What&apos;s your name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeeeee] px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='First name' />
                        <input
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeeeee] px-4 py-2 border rounded w-1/2 text-lg placeholder:text-base'
                            type="text"
                            placeholder='Last name' />
                    </div>

                    <h3 className='text-lg font-medium mb-2'>What&apos;s your email</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-6 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com' />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    <input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-6 px-4 py-2 border rounded w-full text-lg placeholder:text-base'
                        type="password"
                        placeholder='password' />
                    <button
                        className='bg-[#111] text-white font-semibold mb-3 px-4 py-2 border rounded w-full text-lg'
                    >Create Account</button>
                    <p className='text-center'>Already hgave an account? <Link to={'/login'} className='text-blue-600'>Login here</Link></p>
                </form>
            </div>
            <div>
                <p className='text-[11.3px] leading-1 text-gray-600'>
                    This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className='font-bold underline'>Privacy Policy</a> and <a href="https://policies.google.com/terms" className='font-bold underline'>Terms of Service</a> apply.
                </p>
            </div>
        </div>
    )
}

export default UserSignup