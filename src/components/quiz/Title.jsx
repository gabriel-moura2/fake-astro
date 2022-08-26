import { CardContent, Typography } from '@mui/material';

const QuizTitle = props => (
		<CardContent>
			<Typography gutterBottom variant="h5" component="div">{props.children}</Typography>
		</CardContent>
	)

export default QuizTitle;