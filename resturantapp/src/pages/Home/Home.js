import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Herosection from '../../components/Herosection/Herosection'
import Card from '../../components/Cards/Card'
import Footer from '../../components/Footer/Footer'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Card/>
        
        <Footer/>
    </div>
  )
}
