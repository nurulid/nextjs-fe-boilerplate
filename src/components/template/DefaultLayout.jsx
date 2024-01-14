import React from 'react'
import { Header } from '../sharedUI/header'
import { Footer } from '../sharedUI/footer'

export const DefaultLayout = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-full'>
        <div className='relative'>
            <Header/>
            <main className='max-w-7xl w-full mx-auto h-full py-6 px-10'>
                {children}
            </main>
        </div>
        <Footer/>
    </div>
  )
}
