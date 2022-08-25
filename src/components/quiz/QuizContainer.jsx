import { useState, createContext } from 'react';
import { Container, Card, CardContent, Stack, Pagination } from '@mui/material';

export const pageContext = createContext(() => {})

const QuizContainer = props => {
	const [page, setPage] = useState(1);
	
	const handleClick = e => {
		setPage(page + 1);
	}

	const pages = props.children
	
	return (
		<Container sx={{my: 5, mt: 16, maxWidth: 'md'}}>
			<Card>
				<CardContent>
					<Stack>
						<Pagination
							count={pages.length}
							sx={{mx: 'auto'}}
							page={page}
							onChange={(e, n) => setPage(n)}
							hidePrevButton
							hideNextButton
						/>
					</Stack>
				</CardContent>
				<pageContext.Provider value={handleClick}>
					{pages[page-1]}
				</pageContext.Provider>
			</Card>
		</Container>
	)
}

export default QuizContainer;