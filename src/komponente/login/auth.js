import { React, useState } from 'react'
import LoginForm from './login'
import './auth.css'

export default function Auth(props) {
  const [active, setActive] = useState('signin')
  return (
    <>
      <div className='box'>
        <div className='innerContainer'>
          {active === 'signin' ? (
            <LoginForm Success={props.Success} />
          ) : (
            //<SignUpForm switchToSignIn={switchToSignIn} />
            console.log('pero')
          )}
        </div>
      </div>
    </>
  )
}
