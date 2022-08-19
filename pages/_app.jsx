import { AppNavBar } from '../src/components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	  <div>
	  	<AppNavBar />
		<Component {...pageProps} />
	  </div>
  )	
}

export default MyApp
