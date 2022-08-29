import { useContext } from 'react';
import { CardMedia, CardContent, Typography } from '@mui/material';

const QuizResult = props => (
		<div>
			{props.image ? <CardMedia component="img" image={props.image} /> : null}
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">{props.children}</Typography>
			</CardContent>
		</div>
	)

export default QuizResult;