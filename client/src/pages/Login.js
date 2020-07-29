import React, { Component, useState } from 'react';
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login'

function LoginPage( ) {

 const successResponse = (response) => {
    setProfile(response.profileObj)
    // axios to backend server   /api/auth/callbac (POST)  

    // isside the endpoint
    // check whther the current user existed or not
    // if not exist, create new row
    // if exist , log user in using passport 


    // CORS

    // protect all your api route 

}

  const failureResponse = (response) => {
    console.log("login failed")
  }

  const logoutResponse = (response) => {
    setProfile(null)
  }
  
  const [profile, setProfile] = useState(null)

  function isLoggedIn() {

    return profile != null

  }

  return (

    <div className='container'>
      
        <GoogleLogin

            clientId ="970195238301-f6vdi1usburijct7fgp2l1k8nbh29ve0.apps.googleusercontent.com"
            buttonText = "Login"
            onSuccess = {successResponse}
            onFailure = {failureResponse}
            CookiePolicy = {'single_host_origin'}
        />
    </div>
  )

}

export default LoginPage