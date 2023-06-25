import './SectionHeader.scss'


const SectionHeader = ({heading}) => {
  return (
    <div className="section">
        <span className='border'> </span>
            <div className="typewriter">
                <h2>{heading}</h2>
            </div>
        <span className='border'> </span>
    </div>
  )
}

export default SectionHeader