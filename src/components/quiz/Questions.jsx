import { useState, createContext } from 'react';
import { CardContent, Stack, Pagination } from '@mui/material';
import { pageContext as ContentPageContext } from './Container';

export const pageContext = createContext(() => {})

const QuizContainer = props => {
	const [page, setPage] = useState(1);
	
	const handleClick = () => {
		setPage(page + 1);
	}

	const pages = props.children
	
	return (
		<div>
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
		</div>
	)
}

export default QuizContainer;