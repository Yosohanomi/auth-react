import React from 'react'
import { Outlet } from 'react-router'
import Header from '../../widgets/header/Header'

export default function MainLayout() {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <footer>Our app footer</footer>
    </>
  )
}
