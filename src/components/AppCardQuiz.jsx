import React, { useState } from 'react';
import { Container, Card, CardMedia, CardContent, CardActions, Typography, Button, Stack, Pagination } from '@mui/material';

const AppCardQuiz = ({ quiz }) => {
	const [page, setPage] = useState(1);

	const handleClick = e => {
		setPage(page + 1);
	}
	
	let pages = [];
	pages.unshift(
		(
			<div>
				<CardMedia component="img" image={quiz.captionImage} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{ quiz.captionTitle }
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant="contained" fullWidth onClick={handleClick}>Iniciar quiz</Button>
				</CardActions>
			</div>
		)
	)

	pages = pages.concat(
		quiz.questions.map((q) => (
			<div>
				<CardMedia component="img" image={q.image} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{ q.title }
					</Typography>
				</CardContent>
				<CardActions>
					{q.answers.map((a => (
						<Button variant="contained" onClick={handleClick}>{a.answer}</Button>
					)))}
				</CardActions>
			</div>
		))
	)
	
	return (
		<Container sx={{my: 5, maxWidth: 'md'}}>
			<Card>
				<CardContent>
					<Stack>
						<Pagination
							count={9} 
							sx={{mx: 'auto'}}
							page={page}
							onChange={(e, n) => setPage(n)}
							hidePrevButton
							hideNextButton
						/>
					</Stack>
				</CardContent>
				{pages[page-1]}
			</Card>
		</Container>
	)
}

export default AppCardQuiz;