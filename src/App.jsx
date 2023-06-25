import './App.scss'
import NavBar from './components/NavBar.jsx'
import SectionHeader from './components/SectionHeader.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <SectionHeader heading="Our Affiliates!" />
      <SectionHeader heading="Our Workflow Wizardry !" />
    </>
  )
}

export default App
