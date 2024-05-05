import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import {useNavigate} from 'react-router-dom'

const Auth0ProviderWithNavigate = ({children}) => {

    const navigate = useNavigate()
    const domain = import.meta.env.VITE_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirect_uri = import.meta.env.VITE_AUTH0_CALLBACK_URL

    function onRedirectCallback(){
        navigate('/auth-callback')
    }

  return (
    <Auth0Provider
            domain= {domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirect_uri
            }}
            onRedirectCallback={onRedirectCallback}
        >
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate