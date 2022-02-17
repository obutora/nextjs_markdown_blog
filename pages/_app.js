
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return <div className='bg-slate-100'>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>

}

export default MyApp
