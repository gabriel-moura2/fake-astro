import { AppNavBar, AppFooter } from '../src/components';
import { Box } from '@mui/material';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	  <div>
	  	<AppNavBar />
		<Box sx={{ minHeight: '100vh' }}>
			<Component {...pageProps} />
		</Box>
		<AppFooter />
	  </div>
  )	
}

export default MyApp
