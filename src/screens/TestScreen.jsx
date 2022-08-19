import { AppCardQuiz } from '../components/';

const TestScreen = props => {
	const quizApi = {captionImage: "anxiety.webp", captionTitle: "Ansiedade"}
	
	return (
		<AppCardQuiz quiz={quizApi} />
	)
}

export default TestScreen;