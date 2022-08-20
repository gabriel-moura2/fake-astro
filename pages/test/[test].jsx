import { AppCardQuiz } from '../../src/components/';

const Test = props => {
	const quizApi = {
		captionImage: "../ego.png",
		captionTitle: "Como você expressa seu ego e como pode evoluir para seu verdadeiro eu",
		questions: [
			{
				image: '',
				title: 'Você se considera uma pessoa criativa?',
				answers: [
					{
						answer: 'Sim, tenho muita criatividade',
						point: []
					},
					{
						answer: 'Faço algumas gambiarras',
						point: []
					},
					{
						answer: 'Talvez',
						point: []
					},
					{
						answer: 'Não',
						point: []
					}
				]
			},
			{
				image: '',
				title: 'Você é introspectivo?',
				answers: [
					{
						answer: 'Sim',
						point: []
					}
				]
			}
		]
	}
	
	return (
		<AppCardQuiz quiz={quizApi} />
	)
}

export default Test;