import Header from './components/Header.jsx'
import Banner from './components/Banner.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Header />

      <main className='content'>
        <Banner />
        <Products />
      </main>

      <Footer />
    </div>
  )
}

export default App
