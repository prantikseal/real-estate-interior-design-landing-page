import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="logo">
            <h1>Interior Karo</h1>
        </div>
        <ul className='navLinks'>
            <li className='navLink'>Home</li>
            <li className='navLink'>Products</li>
            <li className='navLink'>About</li>
            <li className='navLink'>Contact</li>
        </ul>
    </div>
  )
}

export default NavBar