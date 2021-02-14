import styled from 'styled-components';

const SummaryStyles = styled.div`
	max-width: 500px;
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	font-size: 2rem;
	font-weight: bold;
	
	.match-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		span, div {
			width: 150px;
		}
	}
`;

const Summary = ({ summary, getSummary, startedMatches }) => {
	return (
		<>
			<SummaryStyles>
				<button onClick={getSummary} disabled={!startedMatches}>Get Summary</button>
				{!startedMatches && <p>Start a match to be able to get a summary of the table of scores</p>}
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