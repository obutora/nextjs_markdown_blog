
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Header from '../components/Header'



function MyApp({ Component, pageProps }) {
  return <div className='bg-white font-body overflow-auto'>
    <main>
      <Component {...pageProps} />
    </main>
  </div>

}

export default MyApp
