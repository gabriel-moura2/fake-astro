import { useContext } from 'react';
import { Button } from '@mui/material';
import { pageContext } from './Questions';

const QuizAnswer = props => {
	const handleClick = useContext(pageContext);
	
	return <Button sx={{m: 1}} fullWidth variant="contained" onClick={handleClick}>{props.children}</Button>
}

export default QuizAnswer;