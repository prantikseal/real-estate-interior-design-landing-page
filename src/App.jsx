import './App.scss'
import HeroSection from './components/HeroSection'
import OurAffliatesSection from './components/OurAffliatesSection'
import SectionHeader from './components/SectionHeader.jsx'
import WhyChooseUs from './components/WhyChooseUs'
import WorkflowWizadry from './components/WorkflowWizadry'
import ZingersSection from './components/ZingersSection'
import InteriorSection from './components/InteriorSection'

const App = () => {
  return (
    <div className="app">
      <HeroSection />
      <WhyChooseUs />
      <ZingersSection />
      <WorkflowWizadry />
      <InteriorSection />
      <OurAffliatesSection />
    </div>
  )
}

export default App
