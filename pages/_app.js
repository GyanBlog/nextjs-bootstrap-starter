import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
