import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer position="top-right" limit={1} />
      <Component {...pageProps} />

    </div>
  )
  
}

export default MyApp
