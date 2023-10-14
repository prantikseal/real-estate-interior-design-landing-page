import './HeroSection.scss'
import NavBar from './NavBar'
import { useEffect } from 'react'

const HeroSection = () => {
    const animatedHeading = ['Elegance', 'Perfection', 'Style', 'Comfort']
    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            document.querySelector('.animatedHeading span').innerHTML = animatedHeading[i]
            i++
            if(i === animatedHeading.length) {
                i = 0
            }
        }, 3000)
        return () => clearInterval(interval)
    }, [])
  return (
    <div className='heroSection'>
        <NavBar />
        <div className="heroSectionContent">
                <h1 className='primaryHeading'>Homes crafted with...</h1>
                <h1 className='animatedHeading'>
                    <span></span>
                </h1>
                <div className="ctaSection">
                    <a href="/">Book Free Consultation</a>
                </div>
        </div>
    </div>
  )
}

export default HeroSection