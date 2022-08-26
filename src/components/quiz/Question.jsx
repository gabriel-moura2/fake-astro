import { CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const QuizQuestion = props => (
		<div>
			{props.image ? <CardMedia component="img" image={props.image} /> : null}
			{props.children}
		</div>
	)

export default QuizQuestion;