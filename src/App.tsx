import { useState } from 'react'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './views/home'
import { Preview } from './views/preview'
console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  return (
    <BrowserRouter>
    <Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
            <Route path="/preview" element={<Preview />} />
	
					</Routes>

{/* 
    <UpdateElectron></UpdateElectron> */}
  </BrowserRouter>
  )
}

export default App