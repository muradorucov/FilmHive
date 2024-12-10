import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
