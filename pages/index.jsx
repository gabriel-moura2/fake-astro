import Head from 'next/head';
import { Box } from '@mui/material';
import { AppTitle, AppButtonLink } from '../src/components/';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Home() {
	const matches = useMediaQuery('(min-width:400px)');
	
	return (
		<div>
		  	<Head>
				<title>Fake Astro</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main>
				<Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: 'url(background.jpg)'}}>
					<Box>
						<AppTitle>
							Take psychological <AppButtonLink value="quizzes" href="/quiz/egoNeed"/>
						</AppTitle>
						<AppTitle>
							Keep a <AppButtonLink value="journal" />
						</AppTitle>
						<AppTitle>
							All our <AppButtonLink value="posts" />
						</AppTitle>
					</Box>
					{matches ? <Box sx={{
									height: 205,
									width: 175, 
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundImage: 'url(logo_resolucao.png)',
									'&:hover': {
										opacity: [0.9, 0.8, 0.7],
	        						}
								}}/>
					: null}
				</Box>
			</main>
    	</div>
  )
}
