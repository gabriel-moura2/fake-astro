import { Container, Caption, Question, Questions, Title, Answers, Answer } from '/src/components/quiz'

const egoNeed = props => {
	return (
		<Container>
			<Caption image="../ego.png">
				Como você expressa seu ego e como pode evoluir para seu verdadeiro eu
			</Caption>
			<Questions>
				<Question key="1">
					<Title>Você é uma pessoa criativa?</Title>
					<Answers>
						<Answer key="1" point={[]}>Sim</Answer>
					</Answers>
				</Question>
				<Question key="2">
					<Title>Você é introspectivo?</Title>
					<Answers>
						<Answer key="1" point={[]}>Sim</Answer>
					</Answers>
				</Question>
			</Questions>
		</Container>
	)
}

export default egoNeed;