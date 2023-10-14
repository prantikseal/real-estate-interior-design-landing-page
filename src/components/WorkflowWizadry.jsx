import './WorkflowWizadry.scss';
import SectionHeader from './SectionHeader';
import LogoSlider from './LogoSlider';

const WorkflowWizadry = () => {
  return (
    <div className='workflow-wizadry'>
        <SectionHeader heading='Our Workflow Wizardry !' />
        <h3 className="workflow-wizadry__sub-heading">In just a groovy groove of steps, <span className='red-txt'>redefine</span> your style of <span className='red-txt'>living</span> !</h3>
       <div className='workflow-wizadry__content'>
        <img src="discover.png" alt="" />
        <div className='workflow-wizadry__content__steps'>
          dfsdfsdgdfg
        </div>
      </div> 
    </div>
  )
}

export default WorkflowWizadry