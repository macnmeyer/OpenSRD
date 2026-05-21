import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../pages/landing-page/LandingPage.js'
import ErrorPage from '../pages/error-page/ErrorPage.js'
import Spells from '../pages/spells/Spells.js'

const Layout = () => {
  return (
    <>
    <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/spells" element={<Spells />} />
    </Routes>
    </>
  )
}

export default Layout