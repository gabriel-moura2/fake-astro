import { AppNavBar, AppFooter } from '../src/components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	  <div>
	  	<AppNavBar />
		<Component {...pageProps} />
		<AppFooter />
	  </div>
  )	
}

export default MyApp
