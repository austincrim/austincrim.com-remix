import React from 'react'
import Nav from './Nav'
import ThemePicker from './ThemePicker'

export default function Layout({ children }) {
  return (
    <>
      <ThemePicker />
      <div id="site-body" className="transition-transform picker-closed__body">
        <Nav />
        <div className="px-10 mx-auto lg:max-w-5xl md:max-w-3xl">{children}</div>
      </div>
    </>
  )
}
