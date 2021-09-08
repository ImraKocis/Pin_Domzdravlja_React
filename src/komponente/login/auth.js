import { React, useState } from 'react'
import LoginForm from './login'
import './auth.css'

export default function Auth(props) {
  return (
    <>
      <div className='box'>
        <div className='innerContainer'>
          <LoginForm Success={props.Success} />
        </div>
      </div>
    </>
  )
}
