'use client'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'


const AuthGuard = ({children} : {children : React.ReactNode}) => {
    const [isLoading , setLoading] = useState(true);
    const {isSignedIn} = useUser()
    const router = useRouter()
    useEffect(()=>{
        if(isSignedIn === false){
            router.replace('join')
        }
        else{
            setLoading(false)
        }

        
    }, [isSignedIn , router])
    if (isLoading) return 
    <p>Loading ....</p>
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthGuard