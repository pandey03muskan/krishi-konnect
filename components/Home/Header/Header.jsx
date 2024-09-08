import React from 'react'
import { SigninButton } from './SignInButton'
import { SignupButton } from './SignUpButton'
import { getSession } from '@auth0/nextjs-auth0';
import { SignOutButton } from './SignOutButton';

const Header = async () => {

  const session = await getSession();
  const user = session?.user;

  return (
    <div className='w-full bg-red-600 flex justify-end p-3 gap-3'>
      {user ? <SignOutButton/>: <div className='flex gap-3'><SigninButton/>
        <SignupButton/></div>}
        
         
    </div>
  )
}

export default Header