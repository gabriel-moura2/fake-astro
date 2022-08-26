import { useState, createContext } from 'react';
import { Container, Card, CardContent, Stack, Pagination } from '@mui/material';

export const pageContext = createContext(() => {})

const QuizContainer = props => {
	const [page, setPage] = useState(0);
	
	const handleClick = e => {
		setPage(page + 1);
	} 
	
	return (
		<Container sx={{my: 5, mt: 16, maxWidth: 'md'}}>
			<Card>
				<pageContext.Provider value={handleClick}>
					{props.children[page]}
				</pageContext.Provider>
			</Card>
		</Container>
	)
}

export default QuizContainer;