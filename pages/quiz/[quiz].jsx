import { AppCardQuiz } from '../../src/components/';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, CircularProgress } from '@mui/material';

const Test = props => {
	const [quiz, setQuiz] = useState(null)
	const router = useRouter()

	useEffect(() => {
		fetch('/api/dataQuiz')
		.then(res => res.json())
		.then(json => {
			setQuiz(json[router.query.quiz]);
		});
	})
	
	
	return (
		quiz ? <AppCardQuiz quiz={quiz} /> : <CircularProgress />
	)
}

export default Test;