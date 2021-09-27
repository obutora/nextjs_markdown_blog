
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-100'>
    <Header />
    <main className="container">
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>

}

export default MyApp
