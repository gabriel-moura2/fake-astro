import { AppCardQuiz } from '../../src/components/';

const Test = props => {
	const quizApi = {captionImage: "../anxiety.webp", captionTitle: "Ansiedade"}
	
	return (
		<AppCardQuiz quiz={quizApi} />
	)
}

export default Test;