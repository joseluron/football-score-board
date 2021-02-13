import styled from 'styled-components';

const SummaryStyles = styled.div`
	max-width: 500px;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	
	.match-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		span, div {
			width: 150px;
			font-size: 2rem;
		}

		div > span {
			font-weight: bold;
		}
	}
`;

const Summary = ({ summary, getSummary }) => {
	return (
		<>
			<SummaryStyles>
				<button onClick={getSummary}>Get Summary</button>
				{summary.map(match => 
					<div key={`${match.homeTeam}${match.awayTeam}`} className="match-container">
						<span>{match.homeTeam}</span>
						<div>
							<span>{match.homeTeamScore} - {match.awayTeamScore}</span>
						</div>
						<span>{match.awayTeam}</span>
					</div>
				)}
			</SummaryStyles>
		</>
	)
}

export default Summary;