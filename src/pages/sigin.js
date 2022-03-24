import React from 'react'
import Signin from '../components/Signin'
import { homeObjOne } from '../components/Signin/Data'

const SigninPage = () => {
  return (
    <>
        <Signin {...homeObjOne} />
    </>
  )
}

export default SigninPage