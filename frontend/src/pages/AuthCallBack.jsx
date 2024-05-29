import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/utils/LoadingSpinner'
import { useAuth0 } from '@auth0/auth0-react'
import { addNewUser } from '../slices/UserSlice'
import {useDispatch} from 'react-redux'
import { useEffect, useRef } from 'react'

const AuthCallBack = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useAuth0()
    const handdleRef = useRef(true)

    useEffect(()=>{
        if(user && handdleRef.current){
            dispatch(addNewUser(user))
            handdleRef.current = false
            navigate('/')
        }
    },[user])

    return (
        <>
            <LoadingSpinner />
        </>
    )
}

export default AuthCallBack