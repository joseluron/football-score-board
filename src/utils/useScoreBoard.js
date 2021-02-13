import { useState } from 'react';

const useScoreBoard = () => {
    const [scores, setScores] = useState([
        {homeTeam: 'Spain', awayTeam: 'Poland', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Mexico', awayTeam: 'Canada', started: false, homeTeamScore: 0, awayTeamScore: 0},
        {homeTeam: 'Argentina', awayTeam: 'Italy', started: false, homeTeamScore: 0, awayTeamScore: 0}
    ]);

    const startMatch = (matchIndex) => {
        const allScores = [...scores];
        const startedMatch = {
            ...allScores[matchIndex],
            started: true
        };
        allScores[matchIndex] = startedMatch;
        setScores(allScores);
    }

    const updateMatch = (matchIndex, scoredTeam) => {
        const allScores = [...scores];
        const updatedMatch = {
            ...allScores[matchIndex],
            [`${scoredTeam}TeamScore`]: allScores[matchIndex][`${scoredTeam}TeamScore`] + 1
        }
        allScores[matchIndex] = updatedMatch;
        setScores(allScores);
    }

    const finishMatch = (matchIndex) => {
        setScores([
            ...scores.slice(0, matchIndex),
            ...scores.slice(matchIndex +1),
        ]);
    }

    return {scores, startMatch, updateMatch, finishMatch};
}

export default useScoreBoard;