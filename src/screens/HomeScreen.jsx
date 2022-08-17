import { Container, Link } from '@mui/material';
import { AppTitle, AppButtonLink } from '../components/';

const HomeScreen = props => {
	return (
		<Container>
			<AppTitle>
				Do psychological <AppButtonLink value="tests" />.
			</AppTitle>
			<AppTitle>
				Keep a <AppButtonLink value="diary" />.
			</AppTitle>
			<AppTitle>
				All about <AppButtonLink value="astrology" />.
			</AppTitle>
		</Container>
	);
}

export default HomeScreen;