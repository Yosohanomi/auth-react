import React from 'react'
import { Outlet } from 'react-router'

export default function LoginLayout() {
  return (
    <>
    <header>Login to app</header>
    <main>
        <Outlet/>
    </main>
    <footer>Protected App</footer>
    </>
  )
}
