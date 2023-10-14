import SectionHeader from './SectionHeader'
import './ZingersSection.scss'


const ZingersSection = () => {
  return (
    <div className='zingers-section'>
        <SectionHeader heading='Our Zany Zingers!' />
        <h3 className="zingers-section__sub-heading">“Step into the future of interior design with our revolutionary <span className='blue-txt'>IK</span>.ai Design Engine - where <span className='red-txt'>creativity</span> meets <span className='red-txt'>comfort</span>!”</h3>
        <div className="zingers-section__items">
            <div className="zingers-section__item">
                <img src="design cosmos.png" alt="Design Cosmos" />
                <h4>IK.ai Design <span className='red-txt'>C</span>osmos</h4>
                <p>Designing your dream home has never been easier! Scan your space and create the perfect design with our simple drag-and-drop tool.</p>
            </div>
            <div className="zingers-section__item">
                <img src="immersive visualization.png" alt="immersive visualization" />
                <h4>Immersive <span className='red-txt'>V</span>isualization</h4>
                <p>Step into your dream home with our immersive AR-VR experience and interactive 3D visual walkthroughs - Bringing your vision to life like never before!</p>
            </div>
            <div className="zingers-section__item">
                <img src="instant quote.png" alt="instant quote" />
                <h4>Instant <span className='red-txt'>Q</span>uote</h4>
                <p>Our pricing is completely transparent, ensuring you’ll never pay more than necessary. Additionally, we offer convenient monthly installment plan for hassle-free payments.</p>
            </div>
        </div>
    </div>
  )
}

export default ZingersSection