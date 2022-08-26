import { useContext } from 'react';
import { CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { pageContext } from './Container';

const QuizCaption = props => {
	const handleClick = useContext(pageContext);
	
	return (
		<div>
			{props.image ? <CardMedia component="img" image={props.image} /> : null}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">{props.children}</Typography>
			</CardContent>
			<CardActions>
				<Button variant="contained" fullWidth onClick={handleClick}>Iniciar quiz</Button>
			</CardActions>
		</div>
	)
}

export default QuizCaption;