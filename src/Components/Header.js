import { Link } from 'react-router-dom'
import '../css/header.css'
const Header = () => {
  return (
    <header className='header'>
        <p className='my-name'>Jeremy Munroe</p>
        <nav className='nav-links'>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
        <button className='contact'>Contact</button>
    </header>
  )
}

export default Header