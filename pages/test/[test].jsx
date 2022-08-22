import { AppCardQuiz } from '../../src/components/';

const Test = props => {
	const quizApi = {
		captionImage: "../ego.png",
		captionTitle: "Como você expressa seu ego e como pode evoluir para seu verdadeiro eu",
		questions: [
			{
				id: 1,
				image: '',
				title: 'Você se considera uma pessoa criativa?',
				answers: [
					{
						id: 1,
						answer: 'Sim, tenho muita criatividade',
						point: []
					},
					{
						id: 2,
						answer: 'Faço algumas gambiarras',
						point: []
					},
					{
						id: 3,
						answer: 'Talvez',
						point: []
					},
					{
						id: 4,
						answer: 'Não',
						point: []
					}
				]
			},
			{
				id: 2,
				image: '',
				title: 'Você é introspectivo?',
				answers: [
					{
						id: 1,
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