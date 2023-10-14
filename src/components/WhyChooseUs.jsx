import './WhyChooseUs.scss'
import SectionHeader from './SectionHeader'

const WhyChooseUs = () => {
    const whyChooseUsData = [
        {
            icon: 'artificial-intelligence 1.png',
            content: 'AI Driven Design Engine'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'DIY Design Tool'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'AI Price Estimator'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'AR VR View'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: '45-Day Handover Guarantee'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: '7-Level Secured Shield Inspection'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: '150 Quality Checks'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'Warranty - 10 Years'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'Extensive Product Catalogue'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'Easy EMI'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'Complementary AMC for 1 Year'
        },
        {
            icon: 'artificial-intelligence 1.png',
            content: 'Price Match Guarantee'
        },
    ]
  return (
    <>
        <div className="why-choose-us">
            <SectionHeader heading="Why Choose Us... ?" />
            <h3 className="why-choose-us__sub-heading">“IK jaise koi nai - <span className='red-txt'>paisa</span> wasool experience ki <span className='red-txt'>guarantee</span>”</h3>
            <div className="why-choose-us__items">
                { whyChooseUsData.map((item, index) => (
                <div className="why-choose-us__item" key={index}>
                    <div className="why-choose-us__item__icon">
                        <img src={item.icon} alt={item.icon}  />
                    </div>
                    <div className="why-choose-us__item__content">
                        <p>{item.content}</p>
                    </div>
                </div>
                ))}
            </div>
            <div className="guarantee">
                <div className="guarantee__img">
                    <img src="interior karo guarantee.png" alt="" />
                    </div>
                <div className="guarantee__content">
                    <p><span className='guarantee__content__point'><span className='red-txt'>U</span>nbeatable</span> <br />Price</p>
                    <p><span className='guarantee__content__point'><span className='red-txt'>O</span>n-time</span> <br />Delivery</p>
                    <p><span className='guarantee__content__point'><span className='red-txt'>C</span>ounterfeit</span> <br />Protection</p>
                    <p><span className='guarantee__content__point'><span className='red-txt'>I</span>ndustry</span> <br />Quality Checks</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default WhyChooseUs