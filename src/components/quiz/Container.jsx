import { useState, createContext } from 'react';
import { Container, Card, CardContent, Stack, Pagination } from '@mui/material';

export const pageContext = createContext(() => {})
export const pointContext = createContext(() => [])

const QuizContainer = props => {
	const [page, setPage] = useState(0);
	const points = []
	
	const handleClick = () => {
		setPage(page + 1);
		if (page >= 2) {
			setPage(0)
		}
	} 
	
	return (
		<Container sx={{my: 5, mt: 10, maxWidth: 'md'}}>
			<Card>
				<pageContext.Provider value={handleClick}>
					<pointContext.Provider value={points}>
						{props.children[page]}
					</pointContext.Provider>
				</pageContext.Provider>
			</Card>
		</Container>
	)
}

export default QuizContainer;