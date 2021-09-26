// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/Header'


function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-100'>
    <Header />
    <main className="container">
      <Component {...pageProps} />
    </main>
  </div>

}

export default MyApp
