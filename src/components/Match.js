import styled from 'styled-components';

const MatchStyles = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border: 1px solid black;

	.teams-scores {
		display: flex;
		flex-direction: column;

		.team-score {
			max-width: 150px;
			min-width: 100px;
			padding: 1rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			span {
				font-size: 15px;
				font-weight: bold;
			}
		}
	}

	.match-actions {
		display: flex;
		align-items: center;
		padding: 1rem;
	}
`;

const Match = ({ match, startMatch, updateMatch, finishMatch }) => {
	const { homeTeam, homeTeamScore, awayTeam, awayTeamScore, started, index } = match;
	
	return (
		<>
			<MatchStyles>
				<div className="teams-scores">
					<div className="team-score">
						<span>{homeTeam}</span>
						<span>{started ? homeTeamScore : '-'}</span>
					</div>
					<div className="team-score">
						<span>{awayTeam}</span>
						<span>{started ? awayTeamScore : '-'}</span>
					</div>
				</div>
				<div className="match-actions">
					{started ? (
						<>
							<button onClick={() => updateMatch(index, 'home')}>Home Team Goal</button>
							<button onClick={() => updateMatch(index, 'away')}>Away Team Goal</button>
							<button onClick={() => finishMatch(index)}>Finish Match</button>
						</>
					) : (
						<>
							<button onClick={() => startMatch(index)}>Start Match</button>
						</>
					)}
				</div>
			</MatchStyles>
		</>
	);
}

export default Match;