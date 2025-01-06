import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../../context/UserContext'


const UserProtectWrapper = ({children}) => {
    
    const navigate = useNavigate()
    const token = localStorage.getItem('token') 
    const [isLoading, setIsLoading] = useState(true)
    const {user, setUser} = useContext(UserDataContext)

    useEffect(() => {
        if(!token){
            navigate('/login')
        }
    }, [ token ])

    axios.get(`${import.meta.env.VITE_BASE_URL}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status === 200){
            setUser(response.data.user)
            setIsLoading(false)
        }
    }).catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
    })

    if(isLoading){
        return <div>Loading...</div>
    }
    
  return (
    <div>{children}</div>
  )
}

export default UserProtectWrapper