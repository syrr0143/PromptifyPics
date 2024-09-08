import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='auth flex justify-center h-screen items-center'>
      {children}
    </main>
  )
}

export default Layout
