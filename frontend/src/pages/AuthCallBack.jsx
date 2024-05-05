import { useNavigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { useAuth0 } from '@auth0/auth0-react'
import { addNewUser } from '../slices/UserSlice'
import {useDispatch} from 'react-redux'
import { useEffect } from 'react'

const AuthCallBack = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useAuth0()

    useEffect(()=>{
        dispatch(addNewUser(user))
        navigate('/')
    },[])

    return (
        <>
            <LoadingSpinner />
        </>
    )
}

export default AuthCallBack