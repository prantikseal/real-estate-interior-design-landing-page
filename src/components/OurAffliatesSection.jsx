import './OurAffliatesSection.scss'
import LogoSlider from "./LogoSlider"
import SectionHeader  from "./SectionHeader"

const OurAffliatesSection = () => {
  return (
    <section className="our-affliates-section">
        <SectionHeader heading="Our Affliates" />
        <LogoSlider />
        <div className="our-affliates-section__nri">
            <img src="NRI.png" alt="" />  
            <div className="our-affliates-section__nri__content">
                <h3>
                    We extend our services to <span className='red-txt'>NRI</span>’s as well
                </h3>
                <p>
                    Forget lag, embrace home brag ! With our unique long-distance home setup service, you can curate your dreamy nest from afar. So kick back, relax, and let us make your home dreams take flight, no matter the time zone.
                </p>
            </div>  
        </div>
    </section>
  )
}

export default OurAffliatesSection