import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import { HeroContainer } from '../components/HeroSection/HeroElements'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'


const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home
