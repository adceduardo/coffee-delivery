import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import { CartProvider } from '@/contexts/CartContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right" 
        autoClose={3000} 
        pauseOnHover
        draggable
        hideProgressBar={false}
        theme="colored"
      />
    </CartProvider>
  );
}
