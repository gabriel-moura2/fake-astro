import { useContext } from 'react';
import { useRouter } from 'next/router';
import { CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { pageContext } from './Container';

const QuizResults = props => {
	const handleClick = useContext(pageContext);
	const results = props.children
	const router = useRouter()
	
	return (
		<div>
			{ results[0] }
			<CardActions>
				<Button onClick={handleClick}>Refazer</Button>
				<Button onClick={() => router.back()}>Sair</Button>
			</CardActions>
		</div>
	)
}

export default QuizResults;