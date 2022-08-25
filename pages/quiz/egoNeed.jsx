import { QuizContainer, QuizCaption, QuizQuestion, QuizTitle, QuizAnswers, QuizAnswer } from '/src/components/quiz'

const egoNeed = props => {
	return (
		<QuizContainer>
			<QuizCaption image="../ego.png">
				Como você expressa seu ego e como pode evoluir para seu verdadeiro eu
			</QuizCaption>
			<QuizQuestion key="1">
				<QuizTitle>Você é uma pessoa criativa?</QuizTitle>
				<QuizAnswers>
					<QuizAnswer key="1" point={[]}>Sim</QuizAnswer>
				</QuizAnswers>
			</QuizQuestion>
		</QuizContainer>
	)
}

export default egoNeed;