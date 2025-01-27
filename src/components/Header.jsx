import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
      <div className='justify-right'>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header