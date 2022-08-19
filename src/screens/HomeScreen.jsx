import Link from 'next/link';
import { Container } from '@mui/material';
import { AppTitle, AppButtonLink } from '../components/';

const HomeScreen = props => {
	return (
		<Container>
			<AppTitle>
				Take psychological <Link href="/test/1">test</Link>.
			</AppTitle>
			<AppTitle>
				Keep a <AppButtonLink value="journal" />.
			</AppTitle>
			<AppTitle>
				All our <AppButtonLink value="articles" />.
			</AppTitle>
		</Container>
	);
}

export default HomeScreen;