import { Container, Link } from '@mui/material';
import { AppTitle, AppButtonLink } from '../components/';

const HomeScreen = props => {
	return (
		<Container>
			<AppTitle key="1">
				Do psychological <AppButtonLink value="tests" />.
			</AppTitle>
			<AppTitle key="2">
				Keep a <AppButtonLink value="journal" />.
			</AppTitle>
			<AppTitle key="3">
				All our <AppButtonLink value="articles" />.
			</AppTitle>
		</Container>
	);
}

export default HomeScreen;