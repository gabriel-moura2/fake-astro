import { Container, Link } from '@mui/material';
import { AppTitle, AppButtonLink } from '../components/';

const HomeScreen = props => {
	return (
		<Container>
			<AppTitle>
				Do psychological <AppButtonLink value="tests" />.
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